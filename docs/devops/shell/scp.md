## scp command
**scp 命令格式：**  
scp [参数][源路径][目标路径]

从本地发送到远程服务器  
scp local_file remote_user@remote_ip:remote_file

从服务器复制到本地目录  
scp remote_user@remote_ip:remote_file local_file  

传送文件夹
scp -r local_folder remote_user@remote_ip:remote_folder

*若不在命令中使用用户名会提示需要输入用户名和密码，若使用用户名则需要输入密码*  

使用密钥  
scp -i secret_file local_file remote_user@remote_ip:remote_file  

  将密钥传送到目标服务器  
  cat ~/.ssh/id_rsa.pub | ssh b@B 'cat >> .ssh/authorized_keys'

参数：  
- -r 递归复制整个目录  
- -v 详细信息输出  
- -4，-6 强制使用v4或v6协议  
- -i 指定秘钥文件，此参数直接传递给ssh  
- -P port 指定使用的端口  

参考链接：  
[scp 跨机远程拷贝](https://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/scp.html)