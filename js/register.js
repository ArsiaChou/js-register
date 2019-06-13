(function (win) {
    //init
    win.register = {};
    var register = function () {
        this.element = null;
        this.error = null;
        this.normal = null;
        this.success = null;
        this.focus = null;
    };

    //初始化
    var initialization = function (input) {
        var $span = document.createElement('span');
        $span.style.display = 'block';
        $span.style.width = '100%';
        $span.style.height = '12px';
        $span.style.lineHeight = '12px';
        $span.style.fontSize = '12px';
        $span.style.textAlign = 'left';
        $span.style.paddingLeft = '5px';
        input.parentElement.after($span);
    };

    //输入框状态
    var inputType = {
        type: {
            border: {
                normal: '1px #AAAAAA solid',
                error: '1px #FF4040 solid',
                focus: '1px #555555 solid',
                success: '1px #98FB98 solid'
            },
            boxShadow: {
                normal: '0 0 2px #AAAAAA',
                error: '0 0 2px #FF4040',
                focus: '0 0 2px #555555',
                success: '0 0 2px #98FB98'
            }
        },
        method: {
            normal: function (input) {
                var $parent = input.parentElement;
                $parent.nextElementSibling.innerHTML = '';
                $parent.style.border = inputType.type.border.normal;
                $parent.style.boxShadow = inputType.type.boxShadow.normal;
            },
            error: function (input, words) {
                var $parent = input.parentElement;
                $parent.nextElementSibling.innerHTML = words;
                $parent.style.border = inputType.type.border.error;
                $parent.style.boxShadow = inputType.type.boxShadow.error;
                $parent.nextElementSibling.style.color = '#FF4040';
            },
            focus: function (input) {
                var $parent = input.parentElement;
                $parent.style.border = inputType.type.border.focus;
                $parent.style.boxShadow = inputType.type.boxShadow.focus;
            },
            success: function (input, words) {
                var $parent = input.parentElement;
                if (words == null || words == undefined) words = '';
                $parent.nextElementSibling.innerHTML = words;
                $parent.style.border = inputType.type.border.success;
                $parent.style.boxShadow = inputType.type.boxShadow.success;
                $parent.nextElementSibling.style.color = '#98FB98';
            }
        }
    };

    //聚焦、失焦
    win.register.init = function (selector, check) {
        var input = document.querySelector(selector),
            value = '',
        reply = new register();
        //init
        reply.element = input;

        input.addEventListener('focus', function () {
            value = input.value.trim();
            if (value === '') {
                inputType.method.focus(input);
            } else if (typeof check === 'function') {
                check(value);
            } else {
                inputType.method.focus(input);
            }
        });

        input.addEventListener('blur', function () {
            value = input.value.trim();
            if (value === '') {
                inputType.method.normal(input);
            } else if (typeof check === 'function') {
                check(value);
            } else {
                inputType.method.normal(input);
            }
        });

        reply.error = function (words) {
            inputType.method.error(reply.element, words);
        };

        reply.normal = function () {
            inputType.method.normal(reply.element);
        };

        reply.focus = function () {
            inputType.method.focus(reply.element);
        };

        reply.success = function (words) {
            inputType.method.success(reply.element, words);
        };

        initialization(reply.element);
        return reply;
    }
})(window);