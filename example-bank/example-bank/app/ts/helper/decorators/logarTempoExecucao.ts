export function logarTempoExecucao(segundos: boolean = false) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const funcaoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let divisor = 1;
            let unidade = 'ms';

            if(segundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            console.log('-----------------------');
            console.log(`parametros da funcao ${propertyKey}: ${JSON.stringify(args)}`);

            const t1 = performance.now();

            const retorno = funcaoOriginal.apply(this, args);

            console.log(`retorno da funcao ${propertyKey}: ${JSON.stringify(retorno)}`);

            const t2 = performance.now();

            console.log(`${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`);
            console.log('-----------------------')

            return retorno;
        }

        return descriptor;
    }
}