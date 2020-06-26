---
title: 为什么使用go语言
date: 2020-06-23 09:10:14
sidebar: auto
categories:
- go
tags:
- backend
- go
- analysis
---
:::tip
go语言初步介绍，解析为什么要在开发中使用go语言
:::
<!-- more -->
## 为什么要使用go语言？ Why use the go language for your projects?
### 1. 什么是go？ what is Go？
Go或者Golang是一款开源编程语言。他具有静态类型，能够编译成机器二进制码。  
有人说他是二十一世纪的C语言。  
发明人：Google’s Rob Pike, Robert Griesemer, and Ken Thompson  
创立go语言的主要目的是：
1. 易用的最先进的生产力
2. 高效率的静态类型
3. 先进的网络性能和充分利用多核
### 2. 对你的项目来说go语言的优势是什么？ What are the advantages of using Go for your projects?

Go热度很高，[Go 2020年2月的排名为11名](https://www.tiobe.com/tiobe-index/).  
Go有着C一样的性能和比java更简单的可维护性。没有虚拟机，没有预热阶段，没有[JAR地狱](https://dzone.com/articles/what-is-jar-hell).  
#### Go的优势
1. 更短时间和金钱投入  
  Go直接编译为原生机器码，没有虚拟机。Go应用会运行的更加迅速。
2. Go适用于很多应用  
  你可以把go运用到很多领域，它是一款很灵活的语言。可以做系统或网络编程，大数据，机器学习，音视频的编辑等。  
3. 更好的性能和更好的受众  
  Go无解释器给与了更多的性能提升。并且Go开发的应用对系统需求更少。
4. 系统更稳定  
  Go为多核而生，且使用协程，系统内存消耗更小。减小了Go因为内存不足导致崩溃的几率。
5. 更方便的找到Go开发人员  
  2018年的调查Go有约1,633,000开发人员。  
6. 开发人员可以很轻松支撑Go应用  
   Go有清晰紧凑的语法，很容易学习。  
   有很多工具可以使用  
   1. 自动生成文档  
    GoDoc可以自动从代码生成文档。文档可以交叉引用，有代码示例和版本库链接等
   2. 静态代码分析  
    GoMetaLinter可以很好地帮你分析代码。
   3. 内嵌测试环境  
    开发者可以很方便的进行测试、性能测试、甚至添加自己的代码示例。可以很方便的测试、并行测试、跳过测试等。
   4. 竞态检测  
    Go有一个内置的竞态检测器，
### Go的缺点 What are disadvantages of using Go?
  Go没有自己的GUI库
### 什么样的应用可以使用Go？What projects should you use Go for?
1. 云服务
2. 多媒体平台
3. 新闻媒体
4. 按需服务























### reference
1.[why use go](https://yalantis.com/blog/why-use-go/)