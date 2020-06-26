---
title: git技巧搜集
date: 2020-06-23 14:43:56
sidebar: auto
sidebarDepth: 2
categories:
- git
tags:
- devTools
- git
- knowledge
---

:::tip
git学习过程中碰到的小技巧
:::
<!-- more -->
<!-- ## git 小技巧 -->
[[toc]]  

## git 多用户配置
我们在开发的时候可能会碰到要在一个主机上使用多个git用户的情况，如果不进行配置，会出现冲突等问题。  
简单办法：
在你的shell文件中添加alias。
如 .bashrc,增加使用指定ssh key：
```
alias mgit='GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa_personal" git push -u origin master'
```
还可以使用为git仓库设置专门的用户和邮箱，然后配置ssh config。
### 1. 为项目单独设置用户名和邮箱  
```
    git config user.name "A"
    git config user.email "A@hotmail.com"
```
### 2. 配置ssh
   编辑文件~/.ssh/config  
```
Host personal.github.com
  Hostname github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_personal
  User git
```
其中Host为git地址别名，Hostname为真实地址，PreferredAuthentications为强制使用的验证方式，IdentityFile为使用的rsa key文件，User为用户名。  
### 3. 修改git的配置
   修改你本地仓库目录下.git/config文件中的remote "origin"为别名地址，即替换github.com这段为我们的personal.github.com。
```
[remote "origin"]
        url = git@personal.github.com:evoToBetter/Blog.git
```
## git ignore忽略文件
### 忽略文件的优先级
git ignore是用于忽略某些文件，使git不会跟踪它的变化的文件  
git ignore会从多个来源读取文件，按优先级从高到低排列为：  
* 从命令行读取到的文件匹配模式
* 从.gitignore文件中读取的文件匹配模式，这些.gitignore文件存在于工作目录及其子目录下，上层目录的配置会被下层目录覆盖。匹配模式的路径会与这些.gitignore文件的位置相关
* 从$GIT_DIR/info/exclude中读取的文件匹配模式
* 在core.excludesFile中配置的文件中读取到的文件匹配模式

### 忽略文件的模式
* 空行不匹配任何文件
* 以#开头的为注释，需要使用```\```加在```#```前面才能表示一个井号。
* 尾部的空格会被忽略，除非有```\```转义。
* ```!```可以用来对匹配模式取反，之前被排除的文件，可以被取反重新包含进来。如果父文件夹被排除，那么不能把文件夹中的文件重新包含进来。git由于性能考虑，并不会列出被排除的文件中的文件，所以在被包含的文件上的任何匹配模式都无效。可以在前面使用转义字符```\```来表示一个叹号。
* 在```.gitignore```中```/```表示文件夹分隔。
* 如果在文件匹配模式开头和中间出现了```/```表示，其是一个相对```.gitignore```的路径，而没有的话，那么他匹配的是```.gitignore```相对路径下的每一个文件或文件夹。
* 匹配模式尾部有```/```表示匹配文件夹，否则会匹配文件和文件夹。
* 比如```docs/public```会匹配文件夹```docs/public```，但是不会匹配```a/docs/public```。但是```public/```会匹配文件夹```public/```和```a/public/```。
* ```*```表示除了```/```的任意字符，```?```类似，但是只匹配一个字符。```[]```表示范围，如```[A-Z]```匹配任意一个大写字符。
* 双星号```**```有很多用法，头部的双星号加上右斜线表示任意文件夹，如```**/public```。而尾部的则表示所有包含在内的，如```public/**```。在中间的双星号，匹配任意零到多个文件夹，如```public/**/private```。

### 查看当前使用的文件
```git ls-files```

## 参考链接：  
1. [Multiple github accounts on the same computer?](https://stackoverflow.com/questions/3860112/multiple-github-accounts-on-the-same-computer)  
2. [Manage multiple GIT accounts on a single machine](https://medium.com/@geeky_sh/manage-multiple-git-accounts-on-a-single-machine-d49d710ec229)  
3. [利用 SSH 的用户配置文件 Config 管理 SSH 会话](https://www.hi-linux.com/posts/14346.html)
4. [gitignore](https://git-scm.com/docs/gitignore)