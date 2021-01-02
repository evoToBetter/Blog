---
title: docker知识点记录
date: 2020-11-22 15:47:43
sidebar: auto
categories:
- cloud
tags:
- docker
- cloud
- DevOps
---
:::tip
docker知识记录
:::
<!-- more -->

### docker的网络模式
docker有四种基本网络模式：
1. bridge，桥接模式。docker的守护进程会创建一个虚拟的以太网桥docker0，新的容器创建后会自动桥接到这个接口，附加在其上的任何网卡之间都能自动转发数据包。  
默认情况下，守护进程会创建一对对等虚拟接口veth pair，将其中一个接口设置为容器的eth0接口，另外一个接口放置在宿主机的命名空间中，从而将宿主机上的所有容器都连接到这个内部网络上。  
docker实际是在iptables做了DNAT规则，实现端口转发功能。
2. host，主机模式。docker容器使用主机的网络栈与外界通信。
3. none，空模式。不为docker container创建任何的网络环境，仅有一个lo地址，即回环地址localhost。
4. container，容器模式。指定一个容器，共享它的网络栈。



## 参考链接
1. [Docker 网络模式详解及容器间网络通信](https://juejin.cn/post/6868086876751085581)
2. [docker的网络模式](https://www.qikqiak.com/k8s-book/docs/7.Docker%E7%9A%84%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%BC%8F.html)
