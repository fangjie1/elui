## Carousel 
这是一个简易的轮播组件
![imgae](https://github.com/fangjie1/-wheel-carousel/blob/main/images/demo%E6%BC%94%E7%A4%BA.gif)
### 使用
1. 引入HTML结构
```
<div class="container">
        <h2>Carousel</h2>
        <div>
            <select id="animation-select">
                <option value="slide">slide</option>
                <option value="fade">fade</option>
                <option value="zoom">zoom</option>
            </select>
        </div>
        <div class="carousel">
            <div class="panels">
                <a class="active" href="#0">0</a>
                <a href="#1">1</a>
                <a href="#2">2</a>
                <a href="#3">3</a>
            </div>
            <div class="arrows">
                <button class="arrow arrow-pre"></button>
                <button class="arrow arrow-next"></button>
            </div>
            <ul class="indicators">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
      </div>
}
```
2. 引入CSS文件
       ```
       <link rel="stylesheet" href="Carousel.css">
       ```
3. 在html结构下面引入JS文件
```<script src="Carousel.js"></script>```    
   你可以通过js文件中`new Carousel($carousel, Animation.slide)`创建一个轮播组件
   ``` 
   let $carousel = document.querySelector('.carousel')
   let carousel = new Carousel($carousel, Animation.slide) 
   ```
   Animation函数来实现不同的切换效果，可选参数有Animation.slide(滑动)、Animation.fade(渐变)、Animation.zoom(滑动)

      
      

