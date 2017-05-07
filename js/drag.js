define(function(require, exports, module) {
    var $ = require('jquery');
    //当我们鼠标点击在我们的demo的时候，再移动鼠标，就开始拖动 --> mousedown mousemove
    //当我们鼠标松开的时候，拖拽结束 --> mouseup
    var isDown = false; //如果isDown是true代表的是按下了
    //当鼠标从a位置移动到b位置的时候，我们的demo要跟着跑
    //跑的距离 = 刚开始按下的位置和我们鼠标当前位置的距离差

    var coord = { x: 0, y: 0 }; //用来记录我们的鼠标按下的时候的坐标
    $('.demo').on('mousedown', function(e) {
        // console.log(e);
        isDown = true;
        coord.x = e.pageX;
        coord.y = e.pageY;
    });
    $(document).on('mousemove', function(e) {
        // console.log(12111);
        if (isDown === true) {
            // console.log('可以开始拖拽');
            console.log($('.demo').position().left + (e.pageX - coord.x));
            $('.demo').css({
                left: $('.demo').position().left + (e.pageX - coord.x) + 'px',
                top: $('.demo').position().top + (e.pageY - coord.y) + 'px'
            })
            coord.x = e.pageX;
            coord.y = e.pageY;
        }
    });
    $(document).on('mouseup', function() {
        isDown = false;
    });
});