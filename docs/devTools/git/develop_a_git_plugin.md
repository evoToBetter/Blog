## 怎么来开发一款git的插件（how to develop a git plugin）

把任意一个可执行的程序放到你的PATH里，然后命名为git-COMMANDNAME，git就可以识别并执行它。  
如何获取git的执行地址：  

    git --exec-path

git提供了一套shell库，在$(git --exec-path)/git-sh-setup。  




### ref:
[基于命令行的git plugin开发回顾](https://tonydeng.github.io/slideshare/a-review-of-plugin-git-development-based-on-the-command-line/)  
[extending git](https://www.atlassian.com/git/articles/extending-git)  
[extend-git-with-custom-commands](https://coderwall.com/p/bt93ia/extend-git-with-custom-commands)  