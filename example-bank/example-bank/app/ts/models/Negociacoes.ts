import { Negociacao } from './Negociacao';
import { Imprime } from './Imprime';

export class Negociacoes implements Imprime {
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    imprimir(): void {
        console.log('-- imprimir --');
        console.log(JSON.stringify(this._negociacoes));
    }
}
