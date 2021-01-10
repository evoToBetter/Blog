---
title: helm基本信息
date: 2021-01-03 19:49:24
sidebar: auto
categories:
- k8s
tags:
- cloud native
- k8s
- DevOps
---
:::tip
关于helm基础信息的介绍
:::
<!-- more -->
<!-- TOC -->

- [helm基础](#helm基础)
- [helm命令](#helm命令)
  - [基础命令](#基础命令)
- [helm特性](#helm特性)
- [参考](#参考)

<!-- /TOC -->
## helm基础
helm是针对k8s配置提供的打包、分享工具。可以看做k8s下的apt-get、yum。  
helm相关术语：  
* Helm: Kubernetes的应用打包工具，也是命令行工具的名称。
* Tiller: Helm的服务端，部署在Kubernetes集群中，用于处理Helm的相关命令。
* Chart: Helm的打包格式，内部包含了一组相关的kubernetes资源。gzip格式文件。
* Repoistory: Helm的软件仓库，repository本质上是一个web服务器，该服务器保存了chart软件包以供下载，并有提供一个该repository的chart包的清单文件以供查询。在使用时，Helm可以对接多个不同的Repository。
* Release: 使用Helm install命令在Kubernetes集群中安装的Chart称为Release。
* version：helm在部署应用的时候，提出了一个版本的概念，同一个应用，每次对该应用更改就会生成一个新的版本。那么我们就可以方便的对其进行升级和回滚操作了。

## helm命令
### 基础命令
* helm search： 查找chart
* helm install： 安装一个包到k8s，称为一个应用。
* helm upgrade/rollback: 升级和回滚版本
* helm uninstall： 卸载一个应用
## helm特性
helm 3实验性质支持OCI，OCI（Open Container Initiatives）


























## 参考
1. [helm介绍](https://zhaohuabing.com/2018/04/16/using-helm-to-deploy-to-kubernetes/)