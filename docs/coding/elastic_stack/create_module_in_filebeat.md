---
title: 在filebeat里面创建一个module
date: 2020-06-23 15:16:11
sidebar: auto
categories:
- elastic stack
tags:
- log collection
- elastic stack
- knowledge
---
:::tip
如何在filebeat里创建一个自定义module
:::
<!-- more -->

## 使用make命令创建一个module
下载filebeat代码，然后编译。  
详细方法可以参考，[beats教程](https://www.elastic.co/guide/en/beats/devguide/6.8/index.html)  
### 1. 创建一个新的module  
module相当于对应一个应用。  
切换到beats下的filebeat目录，执行以下命令  
```make create-module MODULE={module}```
module.yml存放的是kibana dashboard配置。
### 2. 创建一个fileset  
fileset相当于一个log文件对应的配置  
使用命令：  
```
make create-fileset MODULE={module} FILESET={fileset}
```
其中  
* ```manifest.yml```是模块的控制文件，可以通过双层括号的语法来使用内置或者定义的变量。  
它的```var```部分是定义变量及其默认值，并且其可以在runtime被filebeat参数覆盖。  
其中还保存着```ingest pipeline```和```input```
* ```ingest pipeline``` ingest pipeline配置文件夹，可以配置多个文件。
* ```config/*.yml```用于生成filebeat输入配置  

* ```ingest/*.json```包含的是elasticsearch的ingest node pipeline配置。可以配置多个pipeline，但是只会有一个在运行时被加载。  
你可以向processors里面添加processor来做具体的解析。  
详情可以[ingest node](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/ingest.html)和[processors](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/ingest-processors.html)参考文档。
## 运行module
### 参数设置
特定module的参数可以在配置文件中设置，也可以使用命令行设置，如  
```
- module: nginx
  access:
    var.paths: ["/var/log/nginx/access.log*"]
```
对应
```
filebeat -e -M "nginx.access.var.paths=[/var/log/nginx/access.log*]"
```
格式为```${moduleName}.${fileSetName}.${configPath}```
#### 输入参数设置
以type为log的例子挑选几个配置来说明：  
针对输入数据的配置都在input配置下面，针对输出到数据存储系统的都在output下面。

在```config/*.json```里设置相应的配置  
比如针对jvm stacktrace，可以使用multiline设置，将多行log作为一个事件处理。具体设置[参考](https://www.elastic.co/guide/en/beats/filebeat/6.8/multiline-examples.html)。  
```processors```代表一系列用于输入数据的处理器  
具体其他设置可以参考[config inputs](https://www.elastic.co/guide/en/beats/filebeat/6.8/configuration-filebeat-options.html)。  
在配置中可以使用go标准的模板语法，详细可以参考[go template](https://golang.org/pkg/text/template/).  
我们在实际处理过程中可以使用grok processor来提取log字段，grok使用正则来分隔字段，并且具有很多内置匹配模式，可以直接使用，匹配模式可以参考[logstash grok-patterns](https://github.com/elastic/logstash/blob/v1.4.0/patterns/grok-patterns)

## debug filebeat
filebeat可以设置参数来配置日志和位置记录文件的存放位置。  
filebeat enable modules命令:  
```./filebeat modules enable apache```
filebeat upload ingest pipeline命令：
```./filebeat setup --pipeline --modules apache```

filebeat启动解析文件的日志为```Harvester started for file:```，可以通过这个标志判断是否找到了需要解析的日志。  
指定文件路径的时候，文件匹配符不支持类似```[0-9]+```，建议使用```[0-9]*```。  
针对带有小数的时间戳，类似```2020-06-22 15:45:42.798291```是可以被grok的```TIMESTAMP_ISO8601```格式匹配上。但是使用```date``` processor的解析时格式设置为```ISO8601```无法解析，需要自己指定格式为```yyyy-MM-dd HH:mm:ss.SSSSSS```,秒的小数部分用```S```表示。