---
title: 关于vscode的小技巧记录
date: 2022-05-04 12:21:22
sidebar: auto
categories:
- devOps
tags:
- devOps
- tools
- vscode
---
:::tip
vscode使用小技巧介绍
:::
<!-- more -->
## vscode的使用小技巧  
### 项目特有的配置文件  
在你的本地项目目录的根目录下可以创建一个叫```.vscode```的文件夹。  
在里面添加一个叫```settings.json```的文件，可以作为项目特定的配置.  
### 如何配置markdown文件的模板和自动补全  
1. 创建snippet设置
可以在配置里面找到用户代码片段，然后选择markdown来创建。  
也可以选择在本地的项目目录的```.vscode```下创建```xx.code-snippets```,扩展名是```.code-snippets```。  
code snippets的语法基于```TextMate```，具体可以搜索学习。  
2. 开启markdown的自动补全  
默认vscode没有开启自动补全，需要增加配置  

```
"[markdown]": {
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "editor.unicodeHighlight.invisibleCharacters": false,
    "editor.wordWrap": "on",
    "editor.quickSuggestions": true
}
```
### 快捷键
#### 预览markdown快捷键  
```ctrl+shift+v```
#### 万能键  
```ctrl+shift+p```