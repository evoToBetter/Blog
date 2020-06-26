---
title: 关于java中复制对象的一些事
date: 2020-06-26 15:37:27
sidebar: auto
categories:
- java
tags:
- backend
- java
- knowledge
---
:::tip
深入了解java中对对象的clone
:::
<!-- more -->
## 浅复制shallow copy
实现```Cloneable```接口，那么其实现的就是浅复制。  
存在的问题，就是仅仅复制了该对象的属性，而没有针对属性中的引用进行复制，导致复制前后两个对象属性中引用的是相同地址。如  
```
public class Dog implements Cloneable {
    public final List<String> names=new ArrayList<>();
    public List<String> nicknames =new ArrayList<>();
    public int age;
    public int weight;

    public Dog clone(){
        try{
            return (Dog)super.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
            throw new Error("Is too");
        }
    }
}
```
我们对其进行复制```Dog bobBarker=bowser.clone();```，得到的对象和bowser的names和nicknames都是相同的。导致向names或者nicknames里写入内容会同时出现在两个对象中。  
尤其是names，其被标记为final，我们不能使用其他方法在复制的时候对其赋值，重新初始化names为一个新的list。  
这是我们在使用cloneable接口的时候需要注意这些限制。  
clone其实我们就可以看做是一个额外的构造器，其进行克隆的时候不应该会有影响原有对象的行为。  
为了完全复制一个对象，我们就需要使用深复制。  
并且实现了cloneable接口，还需要注意使其在多线程中的线程安全问题。  
另外一个实现复制的办法是，复制构造器或者复制工厂方法。  
## 深度复制
实现深度复制的主要思路为使用序列化实现。  
示例代码：
```
public static Object deepCopy(Object oldObject) throws IOException, ClassNotFoundException {
        ObjectOutputStream oos=null;
        ObjectInputStream ois=null;
        try{
            ByteArrayOutputStream bos=new ByteArrayOutputStream();
            oos=new ObjectOutputStream(bos);
            oos.writeObject(oldObject);
            oos.flush();
            ByteArrayInputStream bis=new ByteArrayInputStream(bos.toByteArray());
            ois=new ObjectInputStream(bis);
            return ois.readObject();

        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }finally {
            if(oos!=null){
                oos.close();
            }
            if(ois!=null){
                ois.close();
            }
        }
    }
```
被序列化的对象需要实现Serializable接口。  
参考代码地址：[java copy practice](https://github.com/evoToBetter/java_practice/tree/master/src/main/java/evotobetter/clone)  
第三方工具：  
1. Apache提供的SerializationUtils.clone(T)
2. GSON/Jackson的json序列化反序列化
3. apache的BeanUtils
4. CGLIB的beancopier，据说性能比BeanUtils好。  




## 参考文档
1. [java copy constructors and clone](http://www.xenoveritas.org/blog/xeno/java_copy_constructors_and_clone)
2. [effective java](https://www.amazon.cn/dp/0134685997)
3. [java 浅拷贝，深度拷贝与属性复制](https://houbb.github.io/2019/01/09/java-deep-copy)
4. [BeanUtils与BeanCopier对比](https://juejin.im/post/5dc2b293e51d456e65283e61)