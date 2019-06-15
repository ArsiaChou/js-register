# js-register

### 支持的排版
```html
<div class="input-group">
    <label for="text">text</label>
    <input id="text" type="text">
</div>
<!-- 每个input外都需要一个父元素包裹 -->
<!-- 暂时支持且仅支持这种格式-->
```

### 使用方法
```javascript
//初始化
/*
*   函数 init(selector, check);
*   selector 可为 '#id', '.class', 'tag'
*   check(value)为验证格式的函数，value 为输入框的值
**/
var $input = register.init('#input', (value) => {...});
```
### 状态切换
```javascript
//输入框状态
$input.normal() //正常状态
$input.focus() //聚焦状态
$input.error(words) //警告状态
$input.success(words) //正确状态
```

### 获取和修改输入框的值
```javascript
//获取值
$input.val();
//修改值
$input.val(...);
```

### 获取dom对象，进行其他操作
```javascript
var input = $input.element;
//OR
var input = $($input.element);
```

### 默认值修改
```javascript
//初始化前一定要完成默认值修改
win.register.style = {
        color: {
            normal: '#AAAAAA',
            error: '#FF4040',
            focus: '#555555',
            success: '#98FB98'
        },
        border: {
            width: '1px',
            type: 'solid'
        },
        boxShadow: {
            x: '0',
            y: '0',
            width: '2px'
        },
        span: {
            display: 'inline-block',
            width: '100%',
            fontSize: '12px',
            testAlign: 'left',
            padding: '0 0 0 5px',
            margin: '0 0 5px 0'
        }
    };
//初始化
var $input = register.init('#input', (value) => { });
```