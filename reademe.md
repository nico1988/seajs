##概述
	模块化思想，完成模块布局(主模块，计算器模块，选项卡模块，拖动模块)
    实现三个功能，计算器，选项卡，拖拽
    通过将每个功能模块划分，利用sea.js实现模块引入，减少命名空空间污染，提高代码维护效率
	使用用sea.js，把每个功能点看成一个模块来实现
	可以考虑用面向过程的代码、也可以用面向对象的代码来写选项卡、拖拽等

##步骤
---
###1、引入sea.js---npm install --save sea
###2、通过seajs加载jquery第三方模块
    在juery中插入下面代码(插入到jqury文件底部)，创建seajs依赖
    if ( typeof define === "function" && define.amd ) {
    define( "jquery", [], function() {
        return jQuery;
    } );
    }

    if(typeof define === 'function' && define.cmd){
        define(function(require,exports,module){
            module.exports = jQuery;
        });
    }
![juery安装seajs依赖](http://oothzvg9p.bkt.clouddn.com/jquery%E5%AE%89%E8%A3%85seajs%E4%BE%9D%E8%B5%96.png)
###3、引入主模块
引入主模块，配置seajs基础路径，配置别名
![引入主模块](http://oothzvg9p.bkt.clouddn.com/%E5%BC%95%E5%85%A5%E4%B8%BB%E6%A8%A1%E5%9D%97.png)
###4、编辑主模块代码
在主模块代码中引入依赖(需要分模块暴露数据)

![主模块代码](http://oothzvg9p.bkt.clouddn.com/%E4%B8%BB%E6%A8%A1%E5%9D%97%E4%BB%A3%E7%A0%81.png)
###5、编辑各个模块代码
暴露数据给主模块
![分模块暴露数据](http://oothzvg9p.bkt.clouddn.com/%E5%88%86%E6%A8%A1%E5%9D%97%E6%9A%B4%E9%9C%B2%E6%95%B0%E6%8D%AE%E7%BB%99%E4%B8%BB%E6%A8%A1%E5%9D%97.png)
module为对象，通过exports属性将tab暴露给主模块
###完成