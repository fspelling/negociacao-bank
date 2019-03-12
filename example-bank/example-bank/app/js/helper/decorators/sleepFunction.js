System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function sleepFunction(milisegundos = 500) {
        return function (target, key, descriptor) {
            const original = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearTimeout(timer);
                timer = setTimeout(() => original.apply(this, args), milisegundos);
            };
            return descriptor;
        };
    }
    exports_1("sleepFunction", sleepFunction);
    return {
        setters: [],
        execute: function () {
        }
    };
});
