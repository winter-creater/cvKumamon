# 画熊本熊

### 介绍
页面预览：http://im_winter.gitee.io/cvkumamon/dist/index.html

### 主要目录

1.  /src/css.js 用来编写页面滚动的css代码
2.  /src/index.html 分为code区，和画熊本熊区域，添加了两个控制速度的按钮
3.  /src/test.js 是本项目的js文件
4.  /src/main.js 空文件,parcel依赖main.js

### 知识点
#### substr()
- substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。
- 首字符的索引为 0，最后一个字符的索引为 length-1
- 如果为负值，则被看作 strLength + start
- 如果 start 为正值，且大于或等于字符串的长度，则 substr 返回一个空字符串。

```
str.substr(start,length) 

//例子：
// var str = "abcdefghij";    length=10

// console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
// console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi  => console.log((10+(-3),2)
console.log("(-3): "     + str.substr(-3));    // (-3): hij
console.log("(1): "      + str.substr(1));     // (1): bcdefghij
console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
console.log("(20, 2): "  + str.substr(20,2));  // (20, 2):

```
#### setInterval倒计时
- 每隔1秒打印出hi
```
setInterval((){console.log("hi")},1000)
```

### 运行

```
$parcel src/index.html
```

### 打包发布到github


```
 parcel build src/index.html --no-minify --public-url ./
```

