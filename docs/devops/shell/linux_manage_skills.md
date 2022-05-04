---
title: ubuntu的使用技巧记录
date: 2022-05-04 15:40:16
sidebar: auto
categories:
- devOps
tags:
- devOps
- ubuntu
- shell
---
:::tip
分享一些ubuntu日常使用过程中的技巧记录  
:::
<!-- more -->
## ubuntu的一些使用技巧  
### recovery模式  
启动ubuntu的时候，可以按ESC，按一次进入BIOS模式，退出BIOS后。  
再按ESC进入选择，选择恢复模式，选择以root用户进入就可以免密码进入root用户，做修改了。  
### 用户和组  
增加用户  
useradd -d \${home} \${username}  
为用户增加密码  
passwd \${username}  
增加组  
groupadd \${groupname}  
用户添加入组  
usermod -aG \${groupname} \${username}  
指定用户的shell
usermod -s /bin/bash \${username}  
指定用户的home目录  
usermode -d /home/aa \${username}  
删除用户  
userdel \${username}  
### 磁盘  
显示所有磁盘  
fdisk -l  
显示当前文件系统盘  
df -lh  
磁盘挂载情况  
lsblk  
临时挂载  
mount \${device} \${dir}  
开机挂载，需要修改fstab文件  
/etc/fstab  
查看uuid  
blkid \${device}  
分区操作  
fdisk \${device}  
### 修改主机名及IP  
主机名显示  
hostnamectl  
修改主机名
sudo hostnamectl set-hostname host.example.com  
sudo hostnamectl set-hostname "Your Pretty HostName" --pretty  
sudo hostnamectl set-hostname host.example.com --static  
sudo hostnamectl set-hostname host.example.com --transient  
### 保存git密码到.netrc文件  







