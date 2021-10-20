### 最近在学习 JS 原型链的时候,碰到 prototype 和**proto**属性时总是会很懵逼，看到网上的面试题后就更晕了，于是查找资料比较了这两个属性,写一篇总结防止自己忘记

1. 首先看看 MDN 上关于**proto**的解释
   > Object.prototype (en-US) 的 **proto** 属性是一个访问器属性（一个 getter 函数和一个 setter 函数）, 暴露了通过它访问的对象的内部[[Prototype]] (一个对象或 null)。

> 但它不应该与构造函数 func  的  prototype 属性相混淆。被构造函数创建的实例对象的  [[Prototype]]  指向  func  的  prototype  属性。

所以我们现在可以确定**proto**是 JS 对象里面的一个访问器属性，可以通过它访问内部的[[Prototype]]属性,但是这个[[Protototype]]属性和函数中的 prototype 属性不一样

2. prototype 属性 ---函数特有的属性
   > 函数是 ECMAScript 中最有意思的部分之一，这主要是因为函数实际上是对象。每个函数都是 Function 类型的实例 ---JS 高级第四版

在 JS 中函数也是一个对象，它的构造函数是 Function(),而 prototype 是 JS 每一个函数的一个特殊属性，当我们定义好一个函数后,他就有一个属性 prototype 指向一个原型对象,使用这个构造函数创建一个对象后,这个对象的**proto**属性指向构造函数的原型对象

3.1 看一个例子

```javascript
function Person() {
  this.name = "Tianj0o";
}
const person = new Person();
console.log(person.__proto__ === Person.prototype); //true
```

通过 Person 构造函数创造的 person 实例的**proto**属性指向 Person.prototype,那 Person.prototype 是什么呢？我们上面以及说了,它是一个原型对象,函数定义后就会创建,所以它是一个对象,那它的肯定也有**proto**属性，我们访问一下看看

```javascript
console.log(Person.prototype.__proto__);
//输出 [Object: null prototype] {}
```

为什么是这个呢，我们想一下这是一个对象，那它肯定是由一个构造函数创建--Object(),
所以这个对象的**proto**属性应该指向 Object.prototype

```JavaScript
console.log(Object.prototype) // [Object: null prototype] {}
console.log(Object.prototype === Person.prototype.__proto__)//true
```

按前面的规律,Object.prototype 也是一个对象,那它应该也有**proto**属性指向一个原型对象，这个对象也有**proto**属性，这个一直递归下去,这样明显不好，所以我们输出一下看看 Object.prototype 的**proto**会发现这个值是 null,那**proto**属性的查找到这里也就结束了。
一般称 Object.prototype 这个对象为顶级原型对象。

3.2 再来研究一下 Person 函数作为一个对象它的**proto**属性,参照上面的方法,Person 作为一个函数对象,那它的构造函数应该是 function Function(),所以它的**proto**属性应该指向 Function.prototype,输出一下看看

```js
console.log(Person.__proto__ === Function.prototype); //true
```

那 Person.\_\_\_proto**.\_\_proto**(Function.prototype.\_\_proto\_\_)是什么呢？按照上面的方法可以确定是 Object()这个函数的原型

```js
console.log(Person.__proto__.__proto__ === Object.prototype); //true
```

可以发现又找到了顶级原型 Object.prototype。

现在我们看这张经典的图应该清晰很多了

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83d8e65ba74349e5abc5c6227fb7895b~tplv-k3u1fbpfcp-watermark.image?)
