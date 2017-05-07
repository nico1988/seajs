define(function(require, exports, module) {
    console.log("主模块代码");
    var jsq = require("./jsq");
    jsq.init();
    var Tab = require('./tab');
    var myTab = new Tab('#tab');
    myTab.init();
    var drag = require('./drag');

})