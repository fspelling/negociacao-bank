export function decoratorClasse() {
    return function(constructor: any) {
         const novo: any = function (...args: any[]) {
             console.log("Criando uma instância"); 
             return new constructor(args);
         }
 
         novo.prototype = constructor.prototype;
 
         return novo;
     }
}