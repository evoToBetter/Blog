---
title: java基础知识汇总
date: 2020-06-23 09:04:03
sidebar: auto
categories:
- java
tags:
- backend
- java
- knowledge
---
:::tip
日常工作中java知识拾遗
:::
<!-- more -->
## java基础知识

### java是否可以实现两个有相同方法的类？
可以的，只要两个方法具有相同的签名，那么就会被认为是实现的同一个方法，不会出现编译错误。
但是如果两个同名方法有不同的返回类型，就会有编译错误。

### 查找jvm因为oom被linux内核杀掉的情况
有时候资源紧张的时候，我们的jvm进程不是因为自身的oom退出了，而是因为系统内存不足而退出了。  
这时候可以使用dmesg来查看kernel log。  
具体命令为：  

    dmesg | grep -E -i -B100 'killed process'