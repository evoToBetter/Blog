# 查找jvm因为oom被linux内核杀掉的情况
有时候资源紧张的时候，我们的jvm进程不是因为自身的oom退出了，而是因为系统内存不足而退出了。  
这时候可以使用dmesg来查看kernel log。  
具体命令为：  

    dmesg -T| grep -E -i -B100 'killed process'