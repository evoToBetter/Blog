# docker 使用过程中的一些小技巧记录
[[toc]]
### 删除不需要的容器和镜像
我们在使用docker的过程中，不可避免的会在本地存有很多无用的docker容器和镜像。
那么我们来介绍下如何快速的删除这些让强迫症很不爽的无用数据。
1. 删除所有已经停止的容器  
   ***这里需要注意的是删除的容器必须已经停止。***  
   你需要使用的命令为：**docker rm $(docker ps -a -q)**
   这里**docker ps -a**是列出所有存在的容器，那么-q的作用是只显示容器ID  
   那么我们把这些输出作为**docker rm**的输入就可以删除所有已经停止的容器。  
   因为**docker rm**在删除还在运行的容器的时候，会报错误信息，而不会删除还在运行的容器。所以不用担心删除还在运行的容器。  
2. 删除所有名字或者tag为none的镜像  
   名字或者tag为none的镜像常常产生于多次使用dockerfile打包同一个版本的镜像。  
   每次打包后，旧版本的镜像不会被删除，而是会成为一个名字和tag为none的镜像。  
   那么这个时候如何来删除这些无用的镜像呢？  
   方法很简单，和一种介绍的类似，使用docker命令组合来完成。  
   你需要使用的命令为：**docker rmi $(docker images| grep "^\<none\>" | awk "{print $3}")**  
   **docker rmi**为删除docker镜像的命令。  
   **docker images**则是用来查询docker镜像的，然后使用grep命令来过滤，得到所有带有\<none\>的镜像。  
   每条记录的第三行为镜像ID，那么我们使用awk来取到它。  
   这样就可以使用**docker rmi**删除它了。  

大家看到了这些小技巧，大部分是docker命令与shell命令结合产生的效果，我们可以活学活用，使用shell来组合docker命令，完成更加复杂的任务。  

参考链接：  
[1.remove untagged dockerimages](https://jimhoskins.com/2013/07/27/remove-untagged-docker-images.html)