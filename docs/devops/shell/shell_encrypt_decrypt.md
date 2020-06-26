### shell里进行加密解密
1. base64  
   
    加密  
    echo "XXX"|base64 -i  
    解密  
    echo "XXX"|base64 -d  
    如果需要消除换行的话  
    使用echo -n "XXX"|base64 -i  
    这个在生成用于http的basic authorization key时很有用。

2. openssl
   
    获取key  
    openssl genrsa -out key.txt 2048
    加密  
    echo "XXX"|openssl rsautl -inkey key.txt -encrypt>output.bin  
    解密  
    echo "XXX"|openssl rsautl -inkey key.txt -decrypt<output.bin  
