## ansible 基本知识总结
<!-- TOC -->

- [ansible 基本知识总结](#ansible-基本知识总结)
  - [ansible安装](#ansible安装)
  - [ansible-palybook显示执行的详细信息](#ansible-palybook显示执行的详细信息)
  - [ansible配置host](#ansible配置host)
  - [有用的ansible module](#有用的ansible-module)
  - [参考资料](#参考资料)

<!-- /TOC -->

### ansible安装
  在控制侧使用python3：  
  使用与python3对应的pip安装ansible即可  
  ```
  pip3 install ansible
  ```

### ansible-palybook显示执行的详细信息
  -v, --verbose         verbose mode (-vvv for more, -vvvv to enable
                        connection debugging)  
```
ansible-playbook -vvvv xxx.yml
```
ref:  
1.[get execution details (stackoverflow)](https://stackoverflow.com/questions/18794808/how-do-i-get-logs-details-of-ansible-playbook-module-executions)
### ansible配置host
ansible设置本机：  
在```/etc/ansible/hosts```中添加loaclhost即可
```
[local]
localhost ansible_connection=local
```
### 有用的ansible module
1. docker系列 操作docker  
   docker_network管理docker网络  
   docker_container管理docker镜像及容器等  
2. get_url 获取网络文件  
3. unarchive解压文件  
4. file创建文件或者文件夹  
5. blockinfile段落替换  
6. git模块--操作git  
   曾经遇到的问题：从github拉取elastic/beats时会出现卡死现象，一直无法完成。拉取其他repo都可以。怀疑repo太大导致。  


### 参考资料
1.[W3Cschool教程](https://www.w3cschool.cn/automate_with_ansible/automate_with_ansible-db6727oq.html)