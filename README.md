# js-register

``` javascript
//初始化
/*
*   函数 init(selector, check);
*   selector 可为 '#id', '.class', 'tag'
*   check(value)为验证格式的函数，value 为输入框的值
**/
var $input = register.init('#input', (value) => {...});
```
``` javascript
//输入框状态
$input.normal() //正常状态
$input.focus() //聚焦状态
$input.error(words) //警告状态
$input.success(words) //正确状态
```