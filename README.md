# js-register

### 使用方法
```javascript
//初始化
/*
*   函数 init(selector, check);
*   selector 可为 '#id', '.class', 'tag'
*   check(value)为验证格式的函数，value 为输入框的值
**/
var $input = register.init('#input', (value) => {});
```
### 状态切换
```javascript
var $input = register.init('#input', function(value) {});
//输入框状态
$input.normal() //正常状态
$input.focus() //聚焦状态
$input.error(words) //警告状态
$input.success(words) //正确状态
```

### 默认值修改
```javascript
//初始化前一定要完成默认值修改
register.style = {
    input: {
        border: {},
        boxShadow: {}
    },
    span: {}
}
//OR
register.style.input = {
    border: {
         normal: '1px #AAAAAA solid',
         error: '1px #FF4040 solid',
         focus: '1px #555555 solid',
         success: '1px #98FB98 solid'
    },
    boxShadow: {
         normal: 'none',
         error: '0 0 2px #FF4040',
         focus: '0 0 2px #555555',
         success: '0 0 2px #98FB98'
    }
}

register.style.span = {
    display: 'inline-block',
    width: '100%',
    fontSize: '12px',
    testAlign: 'left',
    padding: '0 0 0 5px',
    margin: '0 0 5px 0'
};
//初始化
var $input = register.init('#input', (value) => { });
```