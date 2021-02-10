---
title: golang的时间处理
date: 2021-02-08 14:37:32
sidebar: auto
categories:
- golang
tags:
- golang
- time
---
:::tip
记录golang的基本时间处理方法
:::
<!-- more -->
## 基础
golang自带时间处理包time。  
获取当前时间：  
```now:=time.Now()```  
获取年月日：  
```now.Year(), now.Month(), now.Day(), now.Weekday(), now.Hour(), now.Minute(), now.Second()```  
还可以使用  
````now.Date() (year, month, day), now.Clock() (hour, minute, second)```

