# git 小技巧
[[toc]]  

### git 多用户配置
我们在开发的时候可能会碰到要在一个主机上使用多个git用户的情况，如果不进行配置，会出现冲突等问题。  
简单办法：
在你的shell文件中添加alias。
如 .bashrc,增加使用指定ssh key：
```
alias mgit='GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa_personal" git push -u origin master'
```
还可以使用为git仓库设置专门的用户和邮箱，然后配置ssh config。
1. 为项目单独设置用户名和邮箱  
```
    git config user.name "A"
    git config user.email "A@hotmail.com"
```
2. 配置ssh
   编辑文件~/.ssh/config  
```
Host personal.github.com
  Hostname github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_personal
  User git
```
其中Host为git地址别名，Hostname为真实地址，PreferredAuthentications为强制使用的验证方式，IdentityFile为使用的rsa key文件，User为用户名。  
3. 修改git的配置
   修改你本地仓库目录下.git/config文件中的remote "origin"为别名地址，即替换github.com这段为我们的personal.github.com。
```
[remote "origin"]
        url = git@personal.github.com:evoToBetter/Blog.git
```


参考链接：  
[Multiple github accounts on the same computer?](https://stackoverflow.com/questions/3860112/multiple-github-accounts-on-the-same-computer)  
[Manage multiple GIT accounts on a single machine](https://medium.com/@geeky_sh/manage-multiple-git-accounts-on-a-single-machine-d49d710ec229)  
[利用 SSH 的用户配置文件 Config 管理 SSH 会话](https://www.hi-linux.com/posts/14346.html)