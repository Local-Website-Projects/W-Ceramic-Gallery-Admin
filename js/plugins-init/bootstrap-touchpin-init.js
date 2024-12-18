! function (t) {
    "use strict";
    t(document).ready(function () {
        t("input[name='demo0']").TouchSpin(), t("input[name='demo1']").TouchSpin({
            min: 0,
            max: 100,
            step: .1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: "%"
        }), t("input[name='demo2']").TouchSpin({
            min: -1e9,
            max: 1e9,
            stepinterval: 50,
            maxboostedstep: 1e7,
            prefix: "$"
        }), t("input[name='demo_vertical']").TouchSpin({
            verticalbuttons: !0
        }), t("input[name='demo_vertical2']").TouchSpin({
            verticalbuttons: !0,
            verticalupclass: "fa fa-plus",
            verticaldownclass: "fa fa-minus"
        }), t("input[name='demo4']").TouchSpin({
            postfix: "a button",
            postfix_extraclass: "btn btn-default"
        }), t("input[name='demo4_2']").TouchSpin({
            postfix: "a button",
            postfix_extraclass: "btn btn-default"
        }), t("input[name='demo5']").TouchSpin({
            prefix: "pre",
            postfix: "post"
        })
    })
}(window.jQuery);