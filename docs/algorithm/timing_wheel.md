---
title: 时间轮算法介绍
date: 2021-02-07 11:01:34
sidebar: auto
categories:
- algorithm
tags:
- algorithm
- time
- timing wheel
---
:::tip
介绍时间轮算法的基本知识
:::
<!-- more -->
## introduction
### cron
cron是类unix系统中的一个软件工具，主要是用于执行自动化的任务。  
cron这个词来自于希腊语的χρόνος (英文为chronos)，意思可以翻译为时辰。  
corn主要通过一个叫做“crontab”（cron table）的文件来控制。每个任务需要一个类似于这样的设置，你也可以在jenkins的schedule也是使用了类似的设置：  
```<minute(0-59)> <hour(0-23)> <day of the month(1-31)> <month(1-12)> <day of the week(0-6)> <command to excute>```  
可以有类似的设置：```* * * * * * <command to execute>```  
可以使用的符号有：  
|symbol|usage|
|---|--|
|comma(,)|分隔多个设置，使其作为一个list，比如"Mon,WED,FRI",就是设置一个周之内的多个时间|
|Dash(-)|设置范围，如(2000-2010),指从2000到2010之间|
|Percent(%)|会被转换为换行符，并把第一个%之后的字符作为命令的标准输入|
|非标准字符|
|L|指最后一个，如5L,表示最后一个星期五|
|W|指最近的一个weekday，如15W,表示离15号最近的工作日。|
|Hash(#)|表示第几个，如5#3，表示第三个周五|
|Question mark(?)|表示任意一个时间即可。|
|Slash(/)|表示除的意思，即每个可以整除的数都可以，如*/5,表示每5个数执行一次。|
|在jenkins里面还可以使用，H|表示小时，H可以表示每小时执行一次，但是具体执行时间不固定。|
### 定时
从人类发明时间开始，执行各类任务都离不开对时间的规划。  
那么我们通过cron，其实已经大体上知道了，我们这次希望介绍的是一个定时功能的通用算法。  
针对他的数据结构，他被称为timing wheel(时间轮)。  
他的主要功能就是实现在指定的时间执行相应的任务。  
实现定时功能的工具很多，比如操作系统的crontab，spring框架的quartz，java自带的ScheduleTheradPool等等，  
使用时间轮算法的工具也不少比如Netty、Kafka等。
## 实现
### 定时任务
1. 约定一段时间后单次执行,相对时间和绝对时间可以相互转换（如当前9点，三个小时后执行，也就是12点执行任务）。
2. 多次执行任务，执行之后，将任务重新放回，下次到时间继续执行。

可能碰到的情况：
1. 一个时间点需要执行多个任务。
2. 并发加入多个任务。
3. 时间粒度要求。
### 功能
1. 接受定时任务请求
2. 解析定时配置，设置定时
3. 定时任务到期后执行任务，清除不需要重复执行的任务
### 具体实现
存放时间任务的结构最简单的话为一个  
分层时间轮：  
首先存放

## 参考链接
1. [wiki for cron](https://en.wikipedia.org/wiki/Cron)
2. [算法-时间轮](https://www.veaxen.com/%E7%AE%97%E6%B3%95-%E6%97%B6%E9%97%B4%E8%BD%AE.html)
3. [惊艳的时间轮算法](https://www.cnblogs.com/zhongwencool/p/timing_wheel.html)
4. [Kafka中的时间轮算法](https://juejin.cn/post/6844903702357082125)
5. [Hashed Timing Wheel](https://medium.com/@raghavan99o/hashed-timing-wheel-2192b5ec8082)