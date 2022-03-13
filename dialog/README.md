## Dialog组件使用方法
1. 引入css文件和js文件
```
  <link rel="stylesheet" href="Dialog.css">
  <script src="Dialog.js"></script>
```
2. 复制下面的HTML代码
```
  <div class="container">
        <h2>Dialog1</h2>
        <button class="button open-dialog">打开弹窗</button>
        <div class="dialog">
            <div class="main">
                <div class="header">提示 <button class="close"></button></div>
                <div class="content">
                    <p>这是一段消息</p>
                </div>
                <div class="footer">
                    <button class="button btn-cancel">取消</button>
                    <button class="button primary btn-ok">确定</button>
                </div>
            </div>
        </div>
    </div>
```
3.你可以HTML文件中复制多个.container,以及js文件中创建对应个数的Dialog实例,从而生成多个Dialog组件
```
     new Dialog(document.querySelectorAll('.dialog')[index], {
        onOk() {
            console.log('用户点了ok')//点击确认后执行的代码
        },
        onCancel() {
            console.log('用户点了取消')//点击关闭后执行的代码
        }
    })
    //index为对应类名为dialog的div对象的索引号
```
