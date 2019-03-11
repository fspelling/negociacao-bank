export class Negociacao {
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {
        return this.quantidade * this.valor;
    }

    ehDiaUtil(): boolean {
        return this.data.getDay() != DiaSemana.Sabado && this.data.getDay() != DiaSemana.Domingo;
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