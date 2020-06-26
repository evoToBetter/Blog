### 手工安装jdk  
1. 下载jdk  
   wget https://download.java.net/openjdk/jdk8u40/ri/openjdk_jre_ri-8u40-b25-linux-i586-10_feb_2015.tar.gz
2. 解压  
   tar -zxvf openjdk_jre_ri-8u40-b25-linux-i586-10_feb_2015.tar.gz /opt/jdk/
3. 创建软连接  
   ln -s /opt/jdk/java-se-8u40-ri/ /usr/jdk
4. 配置环境变量  
  vi /etc/profile  
  JAVA_HOME=/usr/jdk  
  CLASSPATH=\$JAVA_HOME/lib/  
  PATH=\$PATH:$JAVA_HOME/bin  
  export PATH JAVA_HOME CLASSPATH  

  