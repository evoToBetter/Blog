---
title: 拓扑排序
date: 2020-08-13 21:04:23
sidebar: auto
categories:
- algorithm
tags:
- algorithm
- graph
- leetcode
- sort
---
:::tip
拓扑排序入门
:::
<!-- more -->
## 用边来表示图
### 描述图
假设我们有一个顶点的集合V,那么假设有两个顶点v1和v2，那么他们之间连接两点的边可以表示为```e12 {v1,v2}```，一个顶点对。我们将这个边集合称为E。  
若```e12 {v1,v2}```与```e21 {v1,v2}```代表不一样的边，则表示这是一个有方向的图，有向图。  
由一条边连接的两个点称为邻接（adjacent）或邻居（neighbor）。指向一个点的边的数量称为这个边的度数（degree）。两条边之间以最少边连接的路径为最短路径（shortest path）。如果边上带有权重，那么这就是一个加权图。  
### 表示图
图的表示依据需要的存储空间和使用的算法而定，这里介绍三种图的表示方法。  
评判标准可以有这三个，空间占用大小，寻找指定边是否在图内及寻找指定点邻居的耗时。  
### 边列表
直接将边作为列表列出，边列表比较简单，但是其对搜索不友好。  
### 邻接矩阵
使用矩阵数值代表该点是否连接边及连接的权重。  
我们可以在O(1)时间内搜索到对应的边，但是相应的缺点为消耗的空间为O($V^2$),其次是寻找邻接点需要O($V$),把每个点都找一遍.  
### 邻接表
将边按照对应的定点，放入一个以顶点为索引的列表里。每个元素中为相应的点连接的边。这样就结合了边列表和邻接矩阵的有点。  

### 相关leetcode题目
[207. Course Schedule](https://leetcode.com/problems/course-schedule/), [solution](https://github.com/evoToBetter/leetcode_solution/blob/master/src/main/java/evotobetter/leetcode/solution200/CourseSchedule207_2.java)  
[210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/), [solution](https://github.com/evoToBetter/leetcode_solution/blob/master/src/main/java/evotobetter/leetcode/solution210/CourseScheduleII210_1.java)

## ref
1. [graph representation](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs)