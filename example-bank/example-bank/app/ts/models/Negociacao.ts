import { MeuObjeto } from "./index";

export class Negociacao implements MeuObjeto<Negociacao> {
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {
        return this.quantidade * this.valor;
    }

    ehDiaUtil(): boolean {
        return this.data.getDay() != DiaSemana.Sabado && this.data.getDay() != DiaSemana.Domingo;
    }

    imprimir(): void {
        console.log('-- imprimir --');
        console.log(`Data: ${this.data} Quantidade: ${this.quantidade}, Valor: ${this.valor}, Volume: ${this.volume}`);
    }

    ehIgual(obj: Negociacao): boolean {
        return this.data.getDate() == obj.data.getDate()
            && this.data.getMonth() == obj.data.getMonth()
            && this.data.getFullYear() == obj.data.getFullYear(); 
    }
}

enum DiaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}