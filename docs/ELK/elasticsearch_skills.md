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

### 查询文档数量
1. GET /my_index/_count
   返回信息为：  
```
{
  "count" : 156,
  "_shards" : {
    "total" : 5,
    "successful" : 5,
    "skipped" : 0,
    "failed" : 0
  }
}
```  
2. 使用_cat接口查询：GET /_cat/indices/my_index?v
```
health status index          uuid                   pri rep docs.count docs.deleted store.size pri.store.size
yellow open   analysisreport kvVszqcORqaA7CTldXDRRw   5   1        343            0    821.5kb        821.5kb
```

可以看到两个方法查询的文档数量并不一致。这是因为第一种方法查询的是顶级文档的计数，而_cat接口为嵌套字段创建的文档。
简单的理解的话，可以把前一个看做es所拥有的记录数，后一个为es中lucene的文档数。

参考链接：[elasticsearch – 弹性搜索文档计数](https://codeday.me/bug/20190211/635036.html)

### es 删除index
  curl -XDELETE localhost:9200/${index_name}
### es聚合查询



