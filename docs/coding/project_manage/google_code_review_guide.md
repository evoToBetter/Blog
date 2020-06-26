---
title: 谷歌代码评审指南学习
date: 2020-06-23 09:18:11
sidebar: auto
categories:
- project manage
tags:
- project manage
- knowledge
---
:::tip
谷歌代码评审指南翻译和介绍
:::
<!-- more -->
# 谷歌代码评审指南 google code review guide  

## 代码评审人指南 code reviewer guide  
### 1. 代码评审的标准 The standard of code review  
目的：代码的健康度在持续改善
为了达成这个目的需要作出很多的权衡。
* 若评审人让代码的合入变的非常困难，那么代码的改善将无从谈起。
* 同时代码评审人需要保证代码质量不能降低。
* 代码评审人对评审的代码有所有权和责任。
  
  代码评审中的需要遵守的原则为：  
  评审人应认可所有能对代码库健康度有提高的提交，尽管他们可能还不够完美。（最低标准）  
  要点：  
  没有完美的代码只有更好的代码  
  代码评审人需要保证的是持续改进，保证可维护性、可读性、易懂等方面的提高。  
  当然代码评审人可以提出任意可以改进的点，使用"Nit:"。这样CL拥有人可以知道这个建议可以被忽略。

  #### 监控  
  代码评审也是让开发者学习语言、框架及设计准则的好机会，需要评审者给出相应的建议。  
  #### 原则  
  * 事实胜于雄辩，以技术和数据为准。
  * 代码风格必须统一
  * 软件设计从来不是纯风格问题和个人喜好问题。除非开发者可以证明多个方案没有区别，否则应以标准设计原则为准。
  * 若无其他规则适用，CL应与原有代码内容上保持一致。
  
  #### 冲突解决
  出现冲突时，首先需要尝试达到共识。包括在线和离线会议讨论等。  
  若冲突无法解决，最好的办法是升级。
  
### 2. 代码评审中需要关注的点 What to look for in a code review
#### 1. 设计
  * CL各部分之间的互动是否合理
  * CL是否该隶属于这个库
  * CL是否能和系统中其他部分有机结合
  * 是否是个好时机来增加这个功能
#### 2. 功能
  * CL是否很好的实现功能
  * 是否存在bug
  * 从用户的角度检查CL
  * 并发编程是否存在错误
#### 3. 复杂度
  * 是否难以理解
  * 是否难以改动而不引入bug
  * 一类特殊的复杂度为过度工程，过度通用或加入目前不需要的功能。专注于当前问题的解决。
#### 4. 测试
  * 单元测试，集成测试，端到端测试等
  * 由人来保证测试的正确性
  * 测试是否真的会在代码出问题的时候失败
  * 测试是否会出现误报
  * 每个测试是否有单独的断言
  * 测试是否相互独立
  * 测试也是代码的一部分，在测试也不能引入太多的复杂度
#### 5. 命名
  命名是否够具体？命名是否足够长来表达意思而不导致阅读困难？
#### 6. 注释
  注释主要解释代码为什么存在和做了什么，主要是解释代码无法说明的信息或难以理解的信息。需要注意注释和文档的区别，它更注重对代码片段的解释。
#### 7. 风格
  不要以个人喜好，阻止代码合入。而是以"nit:"为前缀提出建议  
  风格修改需要和功能修改分离
#### 8. 文档
  文档需要和代码同步
#### 9. 每一行
  对每一行代码都要仔细检查。  
  代码审查人需要理解代码，以便其他人可以正确理解代码
#### 10. 上下文
  结合上下文来审查CL，严格保持系统的健康度
#### 11. 亮点
  对出现的亮点，也可以写comment来指出
#### 总结
  在做代码审查的时候，你需要保证：  
  * 代码经过很好的设计
  * 功能良好
  * UI改动没问题
  * 并发编程做的很好
  * 代码不过度复杂
  * 不过度开发，不提前开发
  * 代码有合适的UT
  * 测试设计很完善
  * 命名规范清晰
  * 注释清晰，解释为什么这么做而不是做了什么
  * 有很好的文档
  * 代码符合风格指南

### 3. 浏览CL Navigating a CL in review  
  #### 总结
  * 改动是否合理，是否有好的描述
  * 先检查最重要的部分，检查是否经过良好的设计
  * 以一个合适的顺序阅读剩下的部分
  #### 步骤1：全面了解改动 Take a broad view of the change
  首先检查改动是否合理，最好在改动前拒绝不合理改动
  #### 步骤2：检查改动的主要部分 Examine the main parts of the CL
  找到改动的主要部分，通常是改动最大的文件。若改动太大，最好建议将改动拆分。  
  发现大问题时，请第一时间提出评论。
  #### 步骤3：以一个适当的顺序检查剩下部分 Look through the rest of the CL in an appropriate sequence
  可以按列出顺序，也可以先查看测试。
### 4. code review的速度 Speed of Code Reviews
  #### 为什么要快速做code review  Why Should Code Reviews Be Fast?
  团队的速度重要性要大于个人的速度  
  为什么速度很重要：  
  * 团队的速度可能会被某人的review延迟拖慢
  * 快速的review会让抱怨减少
  * 缓慢的review会阻止代码的清理、重构和提高。
  #### code review 需要多快 How Fast Should Code Reviews Be?
  如果没有重要任务，请第一时间做快速review
  最多延迟一个工作日
  一天中可能会进行多轮review
  #### 速度 vs 中断 Speed vs. Interruption
  在工作中一个断点进行review，避免在集中精力工作时打断自己。
  #### 快速响应 Fast Responses
  快速响应，哪怕是一个简单的建议，也非常有用。
  #### 跨时区review Cross-Time-Zone Reviews
  确保在对方上线前完成review
  #### 个人接受 LGTM With Comments
  即使有些遗留问题、建议，也请给出个人接受和批准的评价。  
  最好在个人接受评价中带有响应的comment（评论），以避免歧义等问题。
  #### 大改动列表 Large CLs
  大改动最好拆分成小的。可以快速浏览给出些设计上的评论，不要阻塞开发的任务。
  #### code review随时间推移的改进 Code Review Improvements Over Time
  不要为了速度做出妥协，code review速度的提高需要时间。
  #### 紧急情况 Emergencies
  需要自信甄别什么是紧急情况，要慎重对待。
### 5. 如何写code review评论
  #### 总结
  * 友善
  * 解释你的理由
  * 注意平衡明确指示和只指出问题
  * 鼓励开发者简化代码和增加注释
  #### 礼貌 courtesy
  对事不对人。
  #### 解释理由 Explain Why
  多一点解释有助于理解
  #### 给予指导 Giving Guidance
  一般来说，解决问题是developer的事，而不是reviewer的。  
  你可以指出问题，让developer来选择解决方案。  
  有时候直接的解决方案会更好，code review的最终目的是得到最好的改动。  
  第二个目的是训练developer，减少review时间。
  #### 接受解释 Accepting Explanations
  当你不理解的代码的时候，代码可能需要重构，使其更加清晰。但是当你不知道一些常识的时候，可以要求developer解释。
### 6. 处理code review中的拒绝
  #### 谁是对的？ Who is right?
  当评论、建议被拒绝的时候，可以先多考虑考虑他们是否正确。
  如果developer正确，请告知其忽略这个问题。若reviewer正确，请向developer解释。  
  代码健康度的提高在每次小的步骤里面。
  #### 开发者感到厌烦 Upsetting Developers
  通常是review的语气而不是坚持在某一点上的改进会让developer感到厌烦。
  #### 稍后清理 Cleaning It Up Later
  最好不要稍后清理，而是及时完成。因为developer有很多工作而把清理工作推后，导致代码健康退化。  
  在紧急任务中，需要开一个ticket，然后在代码中增加TODO注释，记录ticket链接。
  #### 关于严格度的普遍抱怨 General Complaints About Strictness
  如果你提高严格度，会带来抱怨。但是提高code review速度可以使抱怨慢慢消退。人们会看到严格带来的价值。
  #### 解决冲突 Resolving Conflicts
  如果一直无法解决冲突，可以考虑升级。

## 改动作者指南 The CL author’s guide to getting through code review
#### 1. 写一份好的CL描述 Writing good CL descriptions
一份改动描述需要包含改动点和理由。它将长期存在在我们代码库中，并且被成千上万人读到。  
如果所有重要信息都在代码里而不是描述里，将比较难读懂。
  #### 第一行 First Line
  * 简单总结已经完成的内容
  * 一个像命令的完成句
  * 后接一个空行  
  第一行是查看改动历史的人看到的第一行，需要能够描述做了什么改动。是一个完成的句子而不是祈使句。  
  
  #### 主体要充满信息 Body is Informative
  * 描述需要解决的问题
  * 为什么这样是最好的方法
  * 如果有其他捷径，需要提及
  * 背景知识：bug数量、性能测试结果、设计文档链接
  * 注意如果是内部链接，最好能提供一些背景描述
  * 最好能够为读者提供上下文
  #### 坏的CL描述 Bad CL Descriptions
  简短而通用的描述会让读者抓不住重点
  比如： "Fix build", "Add patch", "Phase 1"
  #### 好的描述 Good CL Descriptions
  #### 提交前重新审视 Review the description before submitting the CL
  因为在提交前CL已经经过了多次改动，提交前需要检查描述是否还符合目前的改动。
### 2. 小的改动列表 Small CLs
  #### 为什么要写小的CL Why Write Small CLs?
  * review更方便
  * review更彻底
  * 更不容易引入bug
  * 如果被拒绝会更不易浪费工作
  * 更容易合入
  * 更容易设计好
  * review时可以让你并行处理其他部分，而不是阻塞在review
  * 更容易回滚
  #### 如何称之为小 What is Small?
  * 只完成一件事
  * 所有reviewer需要理解的都包含在CL里
  * CL check in之后系统可以正常工作
  * CL不能太小，以至于不能理解他是如何工作的  
  100行通常是ok的，1000行一般被认为是过大的。  
  reviewer通常需要上下文来理解CL，对developer认为合适的可能对reviewer来说就是过大了。
  #### 什么时候可以提交大CL When are Large CLs Okay?
  * 文件删除
  * 自动refactor
  * 带有测试
  ##### 以文件划分 Splitting by Files
  以需要的reviewer不同来划分CL  
  或以功能划分，比如配置和使用配置的代码可以分开
  #### 单独重构 Separate Out Refactorings
  重构最好和功能性的CL分开提交，以免混乱和过大。
  #### 让相关代码在一个CL里 Keep related test code in the same CL
  测试代码最好和其他代码在一个CL里  
  例外情况：  
  * 测试已有代码
  * 重构已有测试
  * 增加新的测试框架
  #### 不要让构建失败 Don’t Break the Build
  CL应单独提交，而不会引起构建失败
  #### 不能让CL变的很小的情况 Can’t Make it Small Enough
  和同时讨论，如何缩小CL  
  实在不行的情况下，提前向reviewer说明情况。
### 3. 处理review建议 How to handle reviewer comments
  #### 不要个人化看待 Don’t Take it Personally
  不要在comments中表达愤怒的情绪
  #### 修正你的代码 Fix the Code
  如果reviewer不理解你的代码，你需要考虑将代码重构的更加清晰，增加注释。  
  如果注释还不能解释清楚，那么请在review tool上给予解释。  
  最好还是在代码中解释清楚，这样有助于后来人理解。
  #### 独立思考 Think for Yourself
  收到comments后，需要仔细思考，提出自己的见解。努力使自己和reviewer在技术层面达成一致。
  #### 解决冲突 Resolving Conflicts
  尽量与reviewer达成共识  
  若实在不行，可以考虑引入更多人讨论，或升级问题。  
  不要让问题遗留。

### ref
[阮一峰---Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)


