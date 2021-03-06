---
title: java exception处理机制解析
date: 2020-06-23 09:01:10
sidebar: auto
categories:
- java
tags:
- backend
- java
- knowledge
---
:::tip
深入了解jvm处理java异常的机制，解释finally中不能抛出异常的原因。
:::
<!-- more -->

## java exception处理解析
[[toc]]

### try catch操作 字节码解析
今天我们来探究下jvm是如何来处理异常的。  
当你在java代码里使用try catch操作的时候，反映在字节码里面是如何的呢？  
在java代码编译为class之后，可以使用jdk自带命令javap来查看字节码。这时候你就能在字节码中发现一个异常表。  
以下是一个例子（jdk版本为1.8.0_172）：  
```
     Exception table:
         from    to  target type
             0    18    18   Class java/lang/IllegalArgumentException
             0    26    44   any
```
异常表就是给与jvm如何处理异常的提示。它提供了一个范围（from to），当异常出现在这个范围内时，回去匹配type指定的异常类型，如果匹配上则转到target行继续执行。  
当程序运行出现异常的时候，jvm会尝试查找当前代码的异常表。  
这个异常表有两行，第一行表示我们设置的try catch块，匹配的异常是IllegalArgumentException。第二行表示finally，匹配任何异常。  
那么从这里我们就可以看到，在我们try catch块里出现异常后，首先jvm查询异常表，尝试匹配第一行，如果无法匹配则尝试执行finally块。  
那么jvm如果没有找到匹配的异常的话，他会进入finally块，与catch块不同的是，在finally块执行完，如果还有异常的话，异常会继续抛出。在每个finally块最后都会有一个athrow字节码，用来标识继续抛出异常。  
jvm在当前class中无法完全处理异常时，会从栈中弹出帧，继续向上抛出异常。

### 为什么不能再finally里抛出异常
因为如果本来在try catch中有异常，而finally抛出异常的话，他会打断原有异常的抛出，转而抛出finally出现的异常，导致原始异常丢失。  
从字节码上来看，就是在finally块中抛出异常时，jvm无法在当前class的异常表中找到对应的异常处理逻辑。那么只能向上抛出异常。而导致之前的异常抛出逻辑被打断。



### 参考链接  
1. [深入理解java异常](https://juejin.im/post/5c863f48e51d45192c4a701f)
2. [Java 异常表与异常处理原理](https://blog.liexing.me/2017/09/17/java-exception-table/)