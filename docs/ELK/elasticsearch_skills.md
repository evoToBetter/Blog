# elasticsearch使用技巧  
———— elasticsearch查询操作记录
[[toc]]
### 查询node的磁盘使用情况
假设elasticsearch的地址为：localhost:9200.我们可以把localhost:9200/_cat/allocation?v简写为/_cat/allocation?v，省略前面的地址。  
那么如果你想要查询elasticsearch的磁盘使用情况，可以使用curl命令GET /_cat/allocation?v，或者使用浏览器访问/_cat/allocation?v。  
示例：  
shards      disk.indices disk.used    disk.avail disk.total   disk.percent host          ip            node  
    28        1.5gb       146gb       877.9gb        1tb           14       10.0.0.1  10.0.0.1   f  
    27        1.4gb       153.1gb     870.8gb        1tb           14       10.0.0.2  10.0.0.2   e  
    27        1.5gb       157.2gb     866.7gb        1tb           15       10.0.0.3 10.0.0.3  y  
其中_cat是es的监控接口；v则是verbose的简写，在任意一个_cat接口后加上这个选项则可以显示每列数据对应的意义。


