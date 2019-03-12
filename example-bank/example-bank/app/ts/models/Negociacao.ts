import { Imprime } from "./Imprime";

export class Negociacao implements Imprime {
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