---
title: 关于java序列化的一些知识
date: 2020-06-30 11:02:15
sidebar: auto
categories:
- java
tags:
- backend
- java
- knowledge
---
:::tip
深入了解java序列化机制
:::
<!-- more -->
## 简单开胃菜
1. java只序列化实现了```Serializable```或者```Externalizable```接口的对象, 成员不是基本对象的，其也要实现这些接口，否则会出现```NotSerializableException```。
2. 不需要序列化的属性可以使用```transient```修饰。
3. 序列化和反序列化的顺序是一致的。
4. java进行序列化的类最好带有```serialVersionUID```作为标识，防止版本号不一致导致的问题。
## 深入了解
在测试前，我们先来搭建一个简单的序列化测试脚手架：  
```
private static void serializeObject(BiConsumer<ObjectOutputStream,ObjectInputStream> biConsumer) throws IOException {
        ObjectOutputStream oos=null;
        ObjectInputStream ois=null;

        try{
            oos=new ObjectOutputStream(new FileOutputStream(RECORD_FILE_PATH));
            ois=new ObjectInputStream(new FileInputStream(RECORD_FILE_PATH));
            biConsumer.accept(oos,ois);
        }catch(Exception e){
            logger.error("Can not serial object",e);
            throw e;
        }finally{
            if(oos!=null){
                oos.close();
            }
            if(ois!=null){
                ois.close();
            }
        }
    }
```
每次我们只需要把我们的测试逻辑填充进来就可以了。  

1. java针对一个对象不会序列化多次  
那么他内部机制是如何的呢？  
1) java的序列化算法所有保存到磁盘的对象都有一个序列化编号  
2) 当需要序列化一个对象时，会先检查这个对象是否已经序列化过了，如果没有序列化过，就将这个对象序列化为字节输出；如果序列化过了，则直接输出编号。  
测试代码：
```
    @Test
    public void testModifyObject() throws IOException {
        UserSource user1 = new UserSource("s1", 10);
        serializeObject((oos, ois) -> {
            try {
                oos.writeObject(user1);
                user1.setAge(20);
                oos.flush();
                UserSource record1 = (UserSource) ois.readObject();
                Assert.assertEquals(record1.getName(), "s1");
                Assert.assertEquals(record1.getAge(), 10);
            } catch (Exception e) {
                logger.error("serialize fail", e);
            }
        });
    }
```
可以看到反序列化出来的内容还是保持了原有对象内容，而不是修改后的内容。
2. 可以使用writeReplace方法来替换目标序列化对象。使用readResolve方法替换反序列化出来的对象。这两个方法需要写在数据类里。  
其中单例类需要重写readResolve方法，以免破坏单例原则。
示例代码：
```
    private Object writeReplace(){
        List<Object> list= new ArrayList<>();
        list.add(this.name);
        return list;
    }
```
那么序列化后的对象就是一个list  
```
    private Object readResolve(){
        return new UserSourceReadResolve("baby",30);
    }
```
那么反序列化出来就是这个对象。
3. 可以强制自定义序列化，使用```Externalizable```接口，实现```writeExternal```和```readExternal```方法。  
注意这两个方法是强制需要实现的，其次是必须提供public的无参数构造器，供反序列化的时候反射创建对象用。  
4. 静态变量不会被序列化保存，因为他属于类而不属于对象。  
5. 关于父类的序列化，如果父类也实现了序列化接口，那么父类的对象也会被序列化，而如果没有实现序列化接口，则会需要一个默认的无参数构造器，父对象的属性中均为空。  
6. 在序列化过程中，虚拟机会试图调用对象类的```writeObject```和```readObject```方法。用户可以自定义这两个方法来动态改变序列化的数值。若实现了这两个方法，那么其会覆盖默认的行为，需要把所有序列化操作都自己来实现。  

## 测试代码
测试代码详情可以参见[SerialTest](https://github.com/evoToBetter/java_practice/blob/master/src/test/evotobetter/serializable/SerialTest.java)



## 参考链接
1. [Discover the secrets of the Java Serialization API](https://www.oracle.com/technical-resources/articles/java/serializationapi.html)
2. 