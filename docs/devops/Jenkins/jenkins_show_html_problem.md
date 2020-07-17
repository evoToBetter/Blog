---
title: jenkins显示html报告问题解决
date: 2020-07-07 09:40:06
sidebar: auto
categories:
- jenkins
tags:
- jenkins
- devops
- tools
---
:::tip
jenkins使用html publisher生成的html报告无法正常显示的解决方案
:::
<!-- more -->
## 问题的原因 CSP限制
当出现这种情况的时候建议使用chrome浏览器，然后打开控制台来调试。使用```F12```打开  
然后使用```F5```刷新页面，我遇到的情况在```console```页可以看到类似的错误提示：
```
Blocked script execution in '<URL>' because the document's frame is sandboxed and the 'allow-scripts' permission is not set.
```
或者
```
Refused to load the XXXX
```
那么可以基本上判定是Jenkins配置的CSP阻止了我们某些文件加载导致的。  
## 解决问题 修改CSP配置
简单介绍下(CSP, Content-Security-Policy)[https://content-security-policy.com/],详细信息可以参考链接。  
CSP是现代浏览器用于增强网页安全提供的一种http相应文件头，你可以通过他来限制加载的JavaScript，CSS和其他文件的来源。  
那么也就是说Jenkins默认的策略限制了我们加载其他地方来源的资源，所以导致了我们无法加载html页面。CSP主要用来防止跨站攻击（XSS）或者其他类似（点击劫持）等的攻击。  
我们可以通过修改这个策略来实现加载我们的html报告。  
1. 临时修改
在主页通过```Manage Jenkins->Script Console```进入脚本执行页面，执行```
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", ""```  
然后重新执行job生成html，就可以搞定了。  
这个方案的缺陷是，每次jenkins重启都会重新回到默认配置。每次重启后，都需要再次修复。  
2. 永久解决方案  
一种为在jenkins的JVM参数中加入```-Dhudson.model.DirectoryBrowserSupport.CSP=""```
另外一种为利用startup trigger plugin，groovy plugin实现：新建一个job执行命令```system.setProperty("hudson.model.DirectoryBrowserSupport.CSP", ""```;在builder triggers模块下选择build when job nodes start;在设置页面build模块下，Add build step->Execute system groovy script, 输入命令```system.setProperty("hudson.model.DirectoryBrowserSupport.CSP", ""```.  
需要注意的是设置jenkins的CSP为空可能有隐患，建议收窄范围。具体的设置可以参考(CSP官网)[https://content-security-policy.com/]。这里给大家个例子，这是我使用的配置：  
```System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "default-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' 'unsafe-inline' data:;")```


## 参考链接
1. [持续集成 解决 Jenkins 中无法展示 HTML 样式的问题](https://blog.csdn.net/weixin_33755847/article/details/93219448)
2. (Jenkins wiki)[https://wiki.jenkins.io/display/JENKINS/Configuring+Content+Security+Policy]
