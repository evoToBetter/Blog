(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{192:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"elasticsearch使用技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch使用技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" elasticsearch使用技巧")]),t._v(" "),e("p",[t._v("———— elasticsearch查询操作记录\n")]),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#查询node的磁盘使用情况"}},[t._v("查询node的磁盘使用情况")])]),e("li",[e("a",{attrs:{href:"#查询文档数量"}},[t._v("查询文档数量")])]),e("li",[e("a",{attrs:{href:"#es聚合查询"}},[t._v("es聚合查询")])])])]),e("p"),t._v(" "),e("h3",{attrs:{id:"查询node的磁盘使用情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询node的磁盘使用情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询node的磁盘使用情况")]),t._v(" "),e("p",[t._v("假设elasticsearch的地址为：localhost:9200.我们可以把localhost:9200/_cat/allocation?v简写为/_cat/allocation?v，省略前面的地址。"),e("br"),t._v("\n那么如果你想要查询elasticsearch的磁盘使用情况，可以使用curl命令GET /_cat/allocation?v，或者使用浏览器访问/_cat/allocation?v。"),e("br"),t._v("\n示例："),e("br"),t._v("\nshards      disk.indices disk.used    disk.avail disk.total   disk.percent host          ip            node"),e("br"),t._v("\n28        1.5gb       146gb       877.9gb        1tb           14       10.0.0.1  10.0.0.1   f"),e("br"),t._v("\n27        1.4gb       153.1gb     870.8gb        1tb           14       10.0.0.2  10.0.0.2   e"),e("br"),t._v("\n27        1.5gb       157.2gb     866.7gb        1tb           15       10.0.0.3 10.0.0.3  y"),e("br"),t._v("\n其中_cat是es的监控接口；v则是verbose的简写，在任意一个_cat接口后加上这个选项则可以显示每列数据对应的意义。")]),t._v(" "),e("h3",{attrs:{id:"查询文档数量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询文档数量","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询文档数量")]),t._v(" "),e("ol",[e("li",[t._v("GET /my_index/_count\n返回信息为：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "count" : 156,\n  "_shards" : {\n    "total" : 5,\n    "successful" : 5,\n    "skipped" : 0,\n    "failed" : 0\n  }\n}\n')])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("使用_cat接口查询：GET /_cat/indices/my_index?v")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("health status index          uuid                   pri rep docs.count docs.deleted store.size pri.store.size\nyellow open   analysisreport kvVszqcORqaA7CTldXDRRw   5   1        343            0    821.5kb        821.5kb\n")])])]),e("p",[t._v("可以看到两个方法查询的文档数量并不一致。这是因为第一种方法查询的是顶级文档的计数，而_cat接口为嵌套字段创建的文档。\n简单的理解的话，可以把前一个看做es所拥有的记录数，后一个为es中lucene的文档数。")]),t._v(" "),e("p",[t._v("参考链接："),e("a",{attrs:{href:"https://codeday.me/bug/20190211/635036.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("elasticsearch – 弹性搜索文档计数"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"es聚合查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es聚合查询","aria-hidden":"true"}},[t._v("#")]),t._v(" es聚合查询")])])},[],!1,null,null,null);a.default=r.exports}}]);