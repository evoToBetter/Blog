(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{506:function(e,t,r){"use strict";r.r(t);var a=r(4),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",[e._v("拓扑排序入门")])]),e._v(" "),r("h2",{attrs:{id:"用边来表示图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用边来表示图"}},[e._v("#")]),e._v(" 用边来表示图")]),e._v(" "),r("h3",{attrs:{id:"描述图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#描述图"}},[e._v("#")]),e._v(" 描述图")]),e._v(" "),r("p",[e._v("假设我们有一个顶点的集合V,那么假设有两个顶点v1和v2，那么他们之间连接两点的边可以表示为"),r("code",[e._v("e12 {v1,v2}")]),e._v("，一个顶点对。我们将这个边集合称为E。"),r("br"),e._v("\n若"),r("code",[e._v("e12 {v1,v2}")]),e._v("与"),r("code",[e._v("e21 {v1,v2}")]),e._v("代表不一样的边，则表示这是一个有方向的图，有向图。"),r("br"),e._v("\n由一条边连接的两个点称为邻接（adjacent）或邻居（neighbor）。指向一个点的边的数量称为这个边的度数（degree）。两条边之间以最少边连接的路径为最短路径（shortest path）。如果边上带有权重，那么这就是一个加权图。")]),e._v(" "),r("h3",{attrs:{id:"表示图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表示图"}},[e._v("#")]),e._v(" 表示图")]),e._v(" "),r("p",[e._v("图的表示依据需要的存储空间和使用的算法而定，这里介绍三种图的表示方法。"),r("br"),e._v("\n评判标准可以有这三个，空间占用大小，寻找指定边是否在图内及寻找指定点邻居的耗时。")]),e._v(" "),r("h3",{attrs:{id:"边列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#边列表"}},[e._v("#")]),e._v(" 边列表")]),e._v(" "),r("p",[e._v("直接将边作为列表列出，边列表比较简单，但是其对搜索不友好。")]),e._v(" "),r("h3",{attrs:{id:"邻接矩阵"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#邻接矩阵"}},[e._v("#")]),e._v(" 邻接矩阵")]),e._v(" "),r("p",[e._v("使用矩阵数值代表该点是否连接边及连接的权重。"),r("br"),e._v("\n我们可以在O(1)时间内搜索到对应的边，但是相应的缺点为消耗的空间为O($V^2$),其次是寻找邻接点需要O($V$),把每个点都找一遍.")]),e._v(" "),r("h3",{attrs:{id:"邻接表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#邻接表"}},[e._v("#")]),e._v(" 邻接表")]),e._v(" "),r("p",[e._v("将边按照对应的定点，放入一个以顶点为索引的列表里。每个元素中为相应的点连接的边。这样就结合了边列表和邻接矩阵的有点。")]),e._v(" "),r("h3",{attrs:{id:"相关leetcode题目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关leetcode题目"}},[e._v("#")]),e._v(" 相关leetcode题目")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://leetcode.com/problems/course-schedule/",target:"_blank",rel:"noopener noreferrer"}},[e._v("207. Course Schedule"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/evoToBetter/leetcode_solution/blob/master/src/main/java/evotobetter/leetcode/solution200/CourseSchedule207_2.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("solution"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://leetcode.com/problems/course-schedule-ii/",target:"_blank",rel:"noopener noreferrer"}},[e._v("210. Course Schedule II"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/evoToBetter/leetcode_solution/blob/master/src/main/java/evotobetter/leetcode/solution210/CourseScheduleII210_1.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("solution"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"ref"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[e._v("#")]),e._v(" ref")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs",target:"_blank",rel:"noopener noreferrer"}},[e._v("graph representation"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);