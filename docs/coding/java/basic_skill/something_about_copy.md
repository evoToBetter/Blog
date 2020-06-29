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
## Apache BeanUtils与cglib BeanCopier对比
前期准备：  
使用版本：commons-beanutils 1.9.4，cglib 3.3.0  
两个数据类+一个准备数据的工具类：
```
public class User {
    private Integer id;
    private String name;
    private Integer age;
    private LocalDateTime gmtBoth;
    private BigDecimal balance;

    public User() {
    }

    public User(Integer id, String name, Integer age, LocalDateTime gmtBoth, BigDecimal balance) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gmtBoth = gmtBoth;
        this.balance = balance;
    }

    public LocalDateTime getGmtBoth() {
        return gmtBoth;
    }

    public void setGmtBoth(LocalDateTime gmtBoth) {
        this.gmtBoth = gmtBoth;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gmtBoth=" + gmtBoth +
                ", balance=" + balance +
                '}';
    }
}

public class NormalUser {
    private int id;
    private String name;
    private int age;
    private String gmtBoth;
    private String balance;

    public NormalUser() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGmtBoth() {
        return gmtBoth;
    }

    public void setGmtBoth(String gmtBoth) {
        this.gmtBoth = gmtBoth;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "NormalUser{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gmtBoth='" + gmtBoth + '\'' +
                ", balance='" + balance + '\'' +
                '}';
    }
}

public class DataUtil {

    public static User createData(int index){
        return new User(index,"vUser"+index,index*10, LocalDateTime.now(),new BigDecimal(index*10));
    }

    public static List<User> createDataList(int size){
        List<User> users=new ArrayList<>();
        for(int i=0; i<size; i++){
            users.add(createData(i));
        }
        return users;
    }
}
```
BeanUtils使用实例,直接转换,但是注意需要处理可能的异常：
```
    @Test
    public void testCopyBeanByBeanUtilsForDifferentClass() throws InvocationTargetException, IllegalAccessException {

        User user = DataUtil.createData(1);
        logger.info("Before copy: {}", user);
        NormalUser user1 = new NormalUser();
        BeanUtils.copyProperties(user1, user);
        logger.info("After copy: {}", user1);
    }
```
BeanCopier实例,由于两个类直接有属性不同，需要转换类来辅助转换：  
```
public class UserConverter implements Converter {

    DateTimeFormatter dtf=DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    @Override
    public Object convert(Object value, Class target, Object context) {
        if(value instanceof Integer){
            return ((Integer) value).intValue();
        }else if(value instanceof LocalDateTime){
            return dtf.format((LocalDateTime)value);
        }else if(value instanceof BigDecimal){
            return ((BigDecimal) value).toPlainString();
        }
        return value;
    }
}
    @Test
    public void testCopyWithConverter() {
        String generatedCodePath = "target/generated-sources";
        System.setProperty(DebuggingClassWriter.DEBUG_LOCATION_PROPERTY, generatedCodePath);
        User user = DataUtil.createData(1);
        logger.info("Before copy: {}", user);
        BeanCopier beanCopier = BeanCopier.create(User.class, NormalUser.class, true);
        NormalUser user1 = new NormalUser();
        beanCopier.copy(user, user1, new UserConverter());
        logger.info("After copy: {}", user1);
    }
```
BeanUtils是基于反射来实现的，而BeanCopier则是基于修改字节码实现的。  
如果想要查看字节码的话，可以在JVM参数里设置。
```
String generatedCodePath = "target/generated-sources";
        System.setProperty(DebuggingClassWriter.DEBUG_LOCATION_PROPERTY, generatedCodePath);
```
查看生成的类，会有两个类，第一个名字如```Object$$BeanCopierByCGLIB$$62379102```,第二个名字如```BeanCopier$BeanCopierKey$$KeyFactoryByCGLIB$$f32401fd```。  
第一个类为转换类，其中包含了如何拷贝：  
```
public void copy(Object var1, Object var2, Converter var3) {
        NormalUser var4 = (NormalUser)var2;
        User var5 = (User)var1;
        Object var10001 = var3.convert(var5.getAge(), Integer.TYPE, "setAge");
        var4.setAge(var10001 == null ? 0 : ((Number)var10001).intValue());
        var4.setGmtBoth((String)var3.convert(var5.getGmtBoth(), CGLIB$load_class$java$2Elang$2EString, "setGmtBoth"));
        var10001 = var3.convert(var5.getId(), Integer.TYPE, "setId");
        var4.setId(var10001 == null ? 0 : ((Number)var10001).intValue());
        var4.setName((String)var3.convert(var5.getName(), CGLIB$load_class$java$2Elang$2EString, "setName"));
    }
```
第二个是用于获取转换类的一个工厂类。  
BeanCopier准备好转换类后，直接调用转换类的copy方法就可以完成复制了。  
具体cglib的实现可以参考：[cglib beanCopier 源码实现](https://www.jianshu.com/p/f8b892e08d26)


## 参考文档
1. [java copy constructors and clone](http://www.xenoveritas.org/blog/xeno/java_copy_constructors_and_clone)
2. [effective java](https://www.amazon.cn/dp/0134685997)
3. [java 浅拷贝，深度拷贝与属性复制](https://houbb.github.io/2019/01/09/java-deep-copy)
4. [BeanUtils与BeanCopier对比](https://juejin.im/post/5dc2b293e51d456e65283e61)
5. [cglib bean copy介绍](https://yq.aliyun.com/articles/695290)
6. [cglib beanCopier 源码实现](https://www.jianshu.com/p/f8b892e08d26)