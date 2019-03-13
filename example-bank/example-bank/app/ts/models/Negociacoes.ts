import { Negociacao } from './Negociacao';
import { MeuObjeto } from './index';

export class Negociacoes implements MeuObjeto<Negociacoes> {
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

    ehIgual(obj: Negociacoes): boolean {
        return obj.paraArray() == this.paraArray();
    }
}
