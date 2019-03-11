System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoExecucao(segundos = false) {
        return function (target, propertyKey, descriptor) {
            const funcaoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let divisor = 1;
                let unidade = 'ms';
                if (segundos) {
                    divisor = 1000;
                    unidade = 'segundos';
                }
                console.log('-----------------------');
                console.log(`parametros da funcao ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = funcaoOriginal.apply(this, args);
                console.log(`retorno da funcao ${propertyKey}: ${JSON.stringify(retorno)}`);
                const t2 = performance.now();
                console.log(`${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                console.log('-----------------------');
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoExecucao", logarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
