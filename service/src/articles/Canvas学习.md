> > [项目地址](https://github.com/Tianj0o/Canvas_Ball) 
>
> > [在线体验](https://tianj0o.github.io/Canvas_Ball/)
>
> 最后效果
> ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c80fa4584fc24bee916deabd9e803008~tplv-k3u1fbpfcp-watermark.image?)
>
> ## 1.快速开始
> ### 1.1 获取canvas上下文,我们所有绘图操作都是在上下文操作中完成的
> ```HTML
> <canvas id="canvas" height="200" width="200"></canvas>
> //canvas元素的宽高可以通过width height属性直接设置
> //当然也可以使用css设置，但是这样可能会出现伸缩导致不正确
> //因此建议使用width height属性设置或者js设置
> ```
> ```javascript 
> const canvas = document.querySelector("#canvas"); //获取canvas 元素
> const ctx = canvas.getContext("2d"); //取得(创建)canvas的(二维)上下文 
> ```
> ### 1.2 了解栅格
> > canvas元素默认被网格所覆盖。通常来说网格中的一个单元相当于canvas元素中的一像素。栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点定位。所以图中蓝色方形左上角的坐标为距离左边（X轴）x像素，距离上边（Y轴）y像素（坐标为（x,y））
> > ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f4af3ee11ef4378ba328148af692941~tplv-k3u1fbpfcp-watermark.image?)
>
> ### 1.3 使用canvas画一条直线
> ```javascript
> ctx.beginPath();//新建一条路径
> ctx.moveTo(100, 100);//将绘图初始点移动到(100,100)
> ctx.lineTo(100, 150);//绘制直线到(100,150)
> ctx.strokeStyle = "red";//设置线条的颜色
> ctx.stroke();//绘制线的轮廓
> ctx.closePath();//闭合此条路径 后面可以继续画线
> ```
> ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9818a60464a2494c95f2cbea9fd2d4c7~tplv-k3u1fbpfcp-watermark.image?)
> ### 1.4使用canvas画矩形
> ```javaScript
> ctx.fillStyle = "red"; //设置填充颜色
> ctx.fillRect(30, 30, 300, 50);//画一个填充矩形参数分别为矩形的起点x坐标,坐标,长度宽度
> 
> ctx.strokeStyle = "blue";//设置线条颜色
> ctx.strokeRect(20, 20, 320, 70);//画一个描边矩形 参数同上
> ```
>
> ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47da0a5203f948d7beea2a313f348105~tplv-k3u1fbpfcp-watermark.image?)
>
> ### 通过上面的介绍我们大致了解了Canvas如何进行基本的绘制，接下来让我们开始这个小项目 😏
>
> ## 2开始项目
> ### 2.1 生成一个小球
> 一个小球应该是有很多属性的，如果我们写死,可以使用一个对象直接表示，但是表示多个不同的小球很不方便，所以可以编写一个构造函数Ball通过new获得一个小球对象实例
> ```javascript
> function Ball(x, y, vx, vy, radius, color) {
>   this.x = x;//小球的x坐标
>   this.y = y;//小球的y坐标
>   this.vx = vx;//小球x速度分量
>   this.vy = vy;//小球y速度分量
>   this.radius = radius;//小球的半径
>   this.color = color;//小球的颜色
> }
> ```
> 我们通过 new Ball()就可以获得一个小球了！
> ### 2.2 绘制小球
> 给小球添加一个方法draw,通过小球位置和半径在canvas中绘制
> ```javascript
> this.draw = function () {
>   ctx.beginPath();
>   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);//圆心的横坐标，纵坐标以半径、开始角和结束角
>   ctx.fillStyle = this.color;
>   ctx.fill();
> }
> ```
> ### 2.3小球动起来
> 给小球增加一个方法move改变小球的位置即可使小球动起来,并且移动的时候还要判断是否到了canvas的边界
> ```javaScript
> this.move() = function(){
>   this.x += this.vx;
>   this.y += this.vy;
>   //碰墙检测
>   if (this.x + this.radius > 500 || this.x - this.radius < 0) {
>     this.vx = -this.vx;
>   }
>   if (this.y + this.radius > 500 || this.y - this.radius < 0) {
>     this.vy = -this.vy;
>   }
>  }
> ```
> ### 2.3判断小球的碰撞
> 这也是这个项目的难点了，我们可以使用通过两球的坐标和半径利用初中学的知识即可判断是否碰到,然后使用小学三年级学到的物理知识来计算两球碰撞后的速度
> (狗头）
>
> ![1633683881097.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa1feafd4cba4f79b93b30b2e3ba504b~tplv-k3u1fbpfcp-watermark.image?)
> ![1633683903854.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/508e6a90694e41d4b20be7e0739aefe7~tplv-k3u1fbpfcp-watermark.image?)
> ![1633683804452.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ba2e57f3eae40c5a1a65321ce1b946a~tplv-k3u1fbpfcp-watermark.image?)
> ![1633683949747.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c3f0345bdcaf4f9bb86fb52e4f536b38~tplv-k3u1fbpfcp-watermark.image?)
> ```javascript
> this.touch = function(otherball){ // 当前小球和另一个球
>   const r = Math.sqrt(
>     (this.x - otherBall.x) ** 2 + (this.y - otherBall.y) ** 2
>   );
>   if (r <= this.radius + otherBall.radius) { //碰撞后的速度计算
>     const dvx = this.vx - otherBall.vx;
>     const dvy = this.vy - otherBall.vy;
>     const d_x = this.x - otherBall.x;
>     const d_y = this.y - otherBall.y;
>     const xx_yy = d_x * d_x + d_y * d_y;
>     const DVx = (dvx * d_x * d_x + dvy * d_x * d_y) / xx_yy;
>     const DVy = (dvy * d_y * d_y + dvx * d_x * d_y) / xx_yy;
>     this.vx = this.vx - DVx;
>     this.vy = this.vy - DVy;
>     otherBall.vx = otherBall.vx + DVx;
>     otherBall.vy = otherBall.vy + DVy;
>   }
> };
> ```
> ### 2.4小球动画
> 小球的函数写好了,怎么使小球流畅的动起来呢？这里使用一下浏览器提供的API, window.requestAnimationFrame()
> > **`window.requestAnimationFrame()`**  告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
> ```javascript
> function loop() {
>       ctx.clearRect(0, 0, 500, 500);//每次画前清空画布
>       ball.draw();//绘制
>       ball.move();//移动
>       window.requestAnimationFrame(loop);
>     }
>     loop();
> ```
>
> ![ball.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4cc98c60c784249a514e8af323de10f~tplv-k3u1fbpfcp-watermark.image?)
> ### 2.5生成多个小球
> ```javascript
> function newBall() {
>   const vRandom = (Math.random() * 2 - 1) * 1.5;
>   const xRandom = Math.random() * 450 + 20;
>   const yRandom = Math.random() * 450 + 20;
>   const rRandom = Math.random() * 20 + 10;
>   let ball = new Ball(
>     xRandom,
>     yRandom,
>     vRandom * 3 + 1,
>     vRandom * 3 + 1,
>     rRandom,
>     `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255
>     })`
>   );
>   return ball;
> }
> ```
> ### 2.6总结
> 项目的函数基本介绍完成，但是实际使用时也发现了一些问题，例如生成小球的时候可能生成位置还有其他的小球的bug,后面给生成函数加了一个判断函数可以解决这个问题。后面也进行了一些优化,将几个移动的函数加到函数的原型，等等。
>
> 最后的代码结构
> ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f58a8baacca6445e87e0075d1d869080~tplv-k3u1fbpfcp-watermark.image?)
>
> 感谢阅读🌝🌝🌝
>
> 推荐一波学习Canvas的资源
>
> [Canvas教程 - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)
>
> [canvas API中文网 - Canvas API中文文档首页地图](https://www.canvasapi.cn/)
