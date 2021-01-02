---
title: k8s 命令速查手册
date: 2020-11-15 16:36:09
sidebar: auto
categories:
- k8s
tags:
- cloud native
- k8s
- operation manual
---
:::tip
k8s kubectl各类命令速查手册
:::
<!-- more -->

### 查看集群
#### kubectl cuslter-info
查看集群信息
#### kubectl version
客户端及服务器版本信息
#### kubectl api-versions
api server中的版本信息
#### kubectl api-resources
api server中resources资源展示
#### kubectl get componentstatuses
查看master组件状态
#### kubectl get event
集群中正在发生的事情的高级信息
### 操作deployment
#### kubectl scale --replicas=8 deployment XXX
滚动增加副本数
### 更新资源
可以使用`kubectl apply`,但是如果资源一旦创建就不能被更新的话，需要使用`kubectl replace --force`，它会删除资源并重新创建。  

