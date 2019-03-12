export function sleepFunction(milisegundos = 500) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        let timer = 0;

        descriptor.value = function(...args: any[]) {
            if(event)
                event.preventDefault();
            
            clearTimeout(timer);
            timer = setTimeout(() => original.apply(this, args), milisegundos);
        }

        return descriptor;
    }
}