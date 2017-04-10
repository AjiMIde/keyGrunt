// 运行幻灯片广告
var key = key || {};

(function () {
    /*
    ** Create a class with some arguments
    */
    key.CreClass = function () {
        return function () {
            //Constructor Function;
            this.initialize.apply(this, arguments);
        }
    };

    /*
    ** Create a class with extending from another class
    */
    key.Extend = function (destination, source) {
        for (var property in source) {
            // if(!destination[property]){
                destination[property] = source[property];
            // }
        }
        return destination;
    };

    /*
    ** 将一个对象绑定到一个函数上，使得这个函数本身的 this，指向了这个对象，而非 function原来的this或 window
    */
    key.Bind = function (object, fun) {
        return function () {
            return fun.apply(object, arguments);
        }
    };

    /*
    * Common Function ,like: Ext.Array.Each(Array,function(ArrObj,ArrIndex){}) 
    */
    key.Each = function (list, fun) {
        for (var i = 0, len = list.length; i < len; i++) {
            fun(list[i], i);
        }
    };

    /*
    ** console.log()简写
    */
    key.p = console.log.bind(console);

    /*
    ** Cookie set/get/delete
    */
    key.setCookie = function (name, value) {
        var Days = 360;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }

    key.getCookie = function (name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null)
            return unescape(arr[2]);
        return null;
    }

    key.delCookie = function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
    /*
    * Query url params
    */
    key.queryUrlStr = function (name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
    }

    /**
     * Rgb to Hex
     */
    key.rgb2hex = function(rgb) {
        if (rgb.charAt(0) == '#')
            return rgb;
        if(rgb.indexOf('rgba')>=0)
            return rgb;

        var ds = rgb.split(/\D+/);
        var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
        var str = decimal.toString(16);
        while (str.length < 6)
            str = "0" + str;
        return "#"+str;
    }
}());