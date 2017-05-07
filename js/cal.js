define(function(require, exports, module) {
    function add(a, b) {
        return parseFloat(a) + parseFloat(b);
    }

    function sub(a, b) {
        return parseFloat(a) - parseFloat(b);
    }

    function mul(a, b) {
        return parseFloat(a) * parseFloat(b);
    }

    function div(a, b) {
        return parseFloat(a) / parseFloat(b);
    }
    module.exports = {
        add: add,
        sub: sub,
        mul: mul,
        div: div
    }
})