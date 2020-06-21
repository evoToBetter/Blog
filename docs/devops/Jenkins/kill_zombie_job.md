# 杀掉jenkins里的僵尸进程
在jenkins里可以执行脚本，位置为：  
>"Manage Jenkins" > "Script Console"  

你可以在这里执行一些groovy脚本，并且调用jenkins内置的一些对象。  

可以使用以下命令来杀死无法正常结束且abort不管用的任务：  

    Jenkins.instance.getItemByFullName("JobName")
                .getBuildByNumber(JobNumber)
                .finish(
                        hudson.model.Result.ABORTED,
                        new java.io.IOException("Aborting build")
                );

getItemByFullName、getBuildByNumber用来找到你的任务，然后对其进行相应的abort操作即可。

### ref
[kill the zombie jenkins jobs](https://stackoverflow.com/questions/14456592/how-to-stop-an-unstoppable-zombie-job-on-jenkins-without-restarting-the-server)