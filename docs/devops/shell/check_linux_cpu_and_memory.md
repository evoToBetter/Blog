---
title: 检查cpu及内存使用率
date: 2020-08-13 09:30:57
sidebar: auto
categories:
- devOps
tags:
- devOps
- shell
- check tools
---
:::tip
shell命令查看内存，cpu使用的一些小技巧
:::
<!-- more -->
我们在使用linux系统的时候，需要监控cpu和内存使用情况，这时候就可以借助一些命令来实现。
## top命令使用的一些小技巧
1. ```top```命令可以实时显示cpu 内存的使用情况，但是可能会有空闲任务来影响判断，这时候我们可以使用```top -i```，这样会隐藏空闲的进程。
2. 在使用top命令时，按```1```可以分cpu来显示各个cpu的工作情况。按```M```以内存使用量排序，按```P```以cpu使用率来拍讯，按```N```以PID排序，按```T```以运行时间排序
## mpstat命令
mpstat是sysstat工具的一部分，大部分redhat系统都带有这一工具。  
```mpstat```会默认显示cpu的总计使用情况  
```mpstat -P 0```可以用来指定显示编号为0的cpu使用信息  
```mpstat -P ALL```可以用来分别显示所有cpu的使用信息