//面向对象的写法
define(function(require, exports, module) {
    var $ = require('jquery');
    //    var titleList = $('#tab .title input[type="button"]');
    //    var contentList = $('#tab .content .item');
    //    titleList.click(function(){
    //         var index = $(this).index();
    //         $(this).addClass('active').siblings().removeClass('active');
    //         contentList.eq(index).show().siblings().hide();
    //    }); 
    function Tab(ele) {
        var $ele = $(ele); //选项卡的最外层元素
        this.titleList = $ele.find('.title input[type="button"]');
        this.contentList = $ele.find('.content .item');
    }

    //给我们的选项卡绑定事件
    Tab.prototype.run = function() {
        var that = this;
        this.titleList.click(function() {
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            that.contentList.eq(index).show().siblings().hide();
        });
    }

    //调用我们的run方法
    Tab.prototype.init = function() {
        this.run();
        this.titleList.eq(1).triggerHandler('click'); //用js来点击我们的元素
    }


    module.exports = Tab;
});