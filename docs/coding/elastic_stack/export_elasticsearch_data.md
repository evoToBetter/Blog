---
title: 如何导出elasticsearch数据
date: 2020-06-23 09:14:41
sidebar: auto
categories:
- database
tags:
- backend
- database
- elastic stack
---
:::tip
介绍如何使用工具导入和导出elasticsearch的数据
:::
<!-- more -->
# 如何导出elasticsearch的数据
[[toc]]

<!-- ### 使用elasticsearch的自身功能导出导入数据 -->
<!-- elasticsearch提供了snapshot和restore的功能，可以导出index。 -->

### 使用elasticsearch-dump工具
elasticsearch-dump（简称elasticdump）是一款用来移动或者保存elasticsearch（简称es）index的工具。  
可以安装或者使用docker启动。  
docker pull taskrabbit/elasticsearch-dump  
主要需要两个参数：input和output，源地址和目的地址。  
源和目的地址可以为：es，文件，stdio。  
es：
* format: ```{protocol}://{host}:{port}/{index}```
* example: ```http://127.0.0.1:9200/my_index```
文件：
* format: ```{FilePath}```
* example: ```/Users/evantahler/Desktop/dump.json```
stdio:
* format: stdin / stdout
* format: ```$```  
命令示例：
使用docker启动elasticdump
```
    docker run --net=host --rm -ti taskrabbit/elasticsearch-dump \
    --input=https://remote:9200/my_index \
    --output=http://localhost:9200/my_index \
    --type=analyzer,mapping,data
```
### 用户名密码验证
针对带有认证的elasticsearch，可以使用在url中写入用户名密码的方式来连接：  
```https://username:password@elasticsearch.example.org```  

