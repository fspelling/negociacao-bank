export function injectDom(selector: string) {
    return function (target: any, key: string) {
        let elemento: JQuery;

        const getter = function () {

            if (!elemento) {
                console.log(`buscando ${selector} e atribuindo na propriedade ${key}`);
                elemento = $(selector);
            }

            return elemento;
        }

        Object.defineProperty(target, key, { get: getter });
    }
}