# Reactive programing
响应式编程主要关心的是数据流和变化的传播,主要用于处理异步数据流和变化的特殊传播。  
它是一种范式，可以轻松地表达静态（如数组）和动态（如事件发射器）的数据流。在相关联的执行模型中推断出依赖关系，帮助数据流变化的传播。

Reactive programing 和 Reactive systems  
Reactive programing不等同于Reactive system. Reactive system不一定使用Reactive programing，但是推荐在系统中使用Reactive programing范式。  
Reactive system与Reactive programing不在一个层面，它是一种系统设计，目标是设计一个弹性、灵活、响应敏捷的应用。  
  
#### 在Reactive programing中可能碰到的问题：
1. Glitches
更新不同步问题。  
比如a通过b依赖c，也直接依赖c。那么可能出现b更新了c的值，而a中直接依赖的c值未更新。
2. Cyclic dependencies
循环依赖问题。  
依赖关系图为一个directed acyclic graph（有向无环图）。但是实际实践中，经常出现图带有环。
通常，语言会允许在“back edge”（后边）放置元素结束循环。通常，语言会设置一个操作符为“延迟”，更新需要在一个延迟内完成。
3. Interaction with mutable state 与可变状态的交互问题
Reactive语言通常认为他的表达式是纯粹的函数式的，因此允许更新机制选择不同的更新顺序来达到性能的优化。  
当Reactive语言嵌入到编程语言的时候，可以允许我们做可变操作。但是如何顺滑地完成这个任务任然是一个开放性的问题。  
目前针对一些问题，提供了一些解决方案：
如 编程语言提供一个“可变单元”概念，用于标记可变部分。
  对面向对象语言进行封装，从而提供一个对状态的封装。callback作为通知机制，通知reactive更新。
