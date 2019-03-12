System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function decoratorClasse() {
        return function (constructor) {
            const novo = function (...args) {
                console.log("Criando uma instância");
                return new constructor(args);
            };
            novo.prototype = constructor.prototype;
            return novo;
        };
    }
    exports_1("decoratorClasse", decoratorClasse);
    return {
        setters: [],
        execute: function () {
        }
    };
});
