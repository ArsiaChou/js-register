(function (win) {
    //调用接口
    win.register = {};
    //返回对象
    var Reply = function () {
        //this处理
        var that = this;
        //dom对象
        this.element = null;
        //输入框验证结果
        this.correct = null;
        //输入框状态
        this.normal = null;
        this.focus = null;
        this.error = null;
        this.success = null;
        //获取输入框的值
        this.val = function () {
            if (arguments.length === 0) {
                return that.element.value;
            } else {
                that.element.value = arguments[0];
            }
        }
    };
    //样式
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
    //input操作
    var inputOperation = {
        normal: function (reply) {
            /*
            *   回归普通状态
            *   此时输入框一定为空，所以结果应为 false
            * */
            reply.correct = false;
            //回归普通状态只需操作输入框父元素
            var input = reply.element.parentElement;
            input.style.border = win.register.style.border.width + ' ' + win.register.style.color.normal + ' ' + win.register.style.border.type;
        },
        focus: function (reply) {
            /*
            *   回归聚焦状态
            *   回归前输入框一定为空，所以结果应为 false
            * */
            reply.correct = false;
            //回归聚焦状态只需操作输入框父元素
            var input = reply.element.parentElement;
            input.style.border = win.register.style.border.width + ' ' + win.register.style.color.focus + ' ' + win.register.style.border.type;
        },
        error: function (reply, words) {
            /*
           *   回归错误状态
           *   结果为 false
           * */
            reply.correct = false;
            //回归聚焦状态只需操作输入框父元素
            var input = reply.element.parentElement;
            input.style.border = win.register.style.border.width + ' ' + win.register.style.color.error + ' ' + win.register.style.border.type;
            input.nextElementSibling.innerHTML = words;
            input.nextElementSibling.style.color = win.register.style.color.error;
        },
        success: function (reply, words) {
            /*
           *   回归正确状态
           *   结果为 true
           * */
            reply.correct = true;
            //回归聚焦状态只需操作输入框父元素
            var input = reply.element.parentElement;
            input.style.border = win.register.style.border.width + ' ' + win.register.style.color.success + ' ' + win.register.style.border.type;
            input.nextElementSibling.innerHTML = words;
            input.nextElementSibling.style.color = win.register.style.color.success;
        }
    };
    //添加span
    var spanInit = function(reply) {
        var $span = document.createElement('span');
        $span.style.display = win.register.style.span.display;
        $span.style.width = win.register.style.span.width;
        $span.style.fontSize = win.register.style.span.fontSize;
        $span.style.textAlign = win.register.style.span.testAlign;
        $span.style.padding = win.register.style.span.padding;
        $span.style.margin = win.register.style.span.margin;
        reply.element.parentElement.after($span);
    };
    //初始化
    win.register.init = function (selector, check) {
        var reply = new Reply();
        //获取dom
        reply.element = document.querySelector(selector);
        //添加显示信息的span
        spanInit(reply);
        //初始化状态函数
        reply.normal = function () {
            inputOperation.normal(reply);
        };
        reply.focus = function () {
            inputOperation.focus(reply);
        };
        reply.error = function (words) {
            words = typeof words === 'undefined' ? '' : words;
            inputOperation.error(reply, words);
        };
        reply.success = function (words) {
            words = typeof words === 'undefined' ? '' : words;
            inputOperation.success(reply, words);
        };
        //初始化输入框聚焦、失焦事件
        reply.element.onfocus = function () {
            var value = reply.val();
            if (value === '') {
                reply.focus();
            } else if (typeof check === 'function') {
                check(value);
            } else {
                reply.focus();
            }
        };
        reply.element.onblur = function () {
            var value = reply.val();
            if (value === '') {
                reply.normal();
            } else if (typeof check === 'function') {
                check(value);
            } else {
                reply.normal();
            }
        };
        //返回输入框操作对象
        return reply;
    }
})(window);