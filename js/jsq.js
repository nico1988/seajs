define(function(require, exports, module) {
    var $ = require("jquery"); //这里引入jquery，juery是别名，代表../node_modules/jquery/dist/jquery.js
    var cal = require('./cal');
    var a = $('#a');
    var b = $('#b');
    var $btn = $('#btn');
    var $operator = $('#operator');
    var $result = $('#result');
    module.exports.init = function() {
        $btn.on('click', function() {
            //我们只需要在点击这一刹那才需要获取表单控件的值
            switch ($operator.val()) {
                case '+':
                    $result.val(cal.add(a.val(), b.val()));
                    break;
                case '-':
                    $result.val(cal.sub(a.val(), b.val()));
                    break;
                case '*':
                    $result.val(cal.mul(a.val(), b.val()));
                    break;
                case '/':
                    $result.val(cal.div(a.val(), b.val()));
                    break;
            }
        });
    }
})