/**
 * Created by coco on 3/23/2017.
 */
/*
 * 不带参数指令
 * v-finger=handler
 * or
 * 带参数指令
 * v-finger=handler(type,$event,params)
 *
 * */
;
(function () {
    'use strict';
    let vFinger = {};
    let hammertime = {};
    let hm = {};
    if (typeof exports == "object") {
        hm = require('hammerjs');
    } else {
        hm = Hammer;
    }

    function isEmptyObject(e) {
        var t;
        for (t in e)
            return !1;
        return !0
    }
    let vueObj = {
        bind: function (el, binding) {
            el.handler = function (type, e) {
                let params = {};
                for (var key in binding.value) {
                    if (key != 'methods') {
                        params[key] = binding.value[key];
                    }
                }
                if (isEmptyObject(params)) {
                    binding.value.methods.apply(this, [type, e]);
                } else {
                    binding.value.methods.apply(this, [type, e, params]);
                }
            }
            hammertime = new hm(el);
            hammertime.on("tap", function (e) {
                //控制台输出
                el.handler("tap", e)
            });
            hammertime.on("pan", function (e) {
                //控制台输出
                el.handler("pan", e)
            });
            hammertime.on("pinch", function (e) {
                //控制台输出
                el.handler("pinch", e)
            });
            hammertime.on("swipe", function (e) {
                //控制台输出
                el.handler("swipe", e)
            });
            hammertime.on("press", function (e) {
                //控制台输出
                el.handler("press", e)
            });
            hammertime.on("rotate", function (e) {
                //控制台输出
                el.handler("rotate", e)
            });

        },
        componentUpdated: function (el, binding) {
            el.handler = function (type, e) {
                let params = {};
                for (var key in binding.value) {
                    if (key != 'methods') {
                        params[key] = binding.value[key];
                    }
                }
                if (isEmptyObject(params)) {
                    binding.value.methods.apply(this, [type, e]);
                } else {
                    binding.value.methods.apply(this, [type, e, params]);
                }
            }
        },
        unbind: function (el) {
            el.handler = function () {};
            hammertime.destroy()
        }
    };
    vFinger.install = function (Vue) {
        Vue.directive('finger', vueObj);
    };


    if (typeof exports == "object") {
        module.exports = vFinger;
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return vFinger
        })
    } else if (window.Vue) {
        window.vueFinger = vFinger;
        Vue.use(vFinger);
    }
})();