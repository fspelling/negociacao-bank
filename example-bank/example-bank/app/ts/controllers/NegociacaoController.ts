class NegociacaoController {
    private _dataInput: HTMLInputElement;
    private _quantidadeInput: HTMLInputElement;
    private _valorInput: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'));

    constructor() {
        this._dataInput = <HTMLInputElement>document.querySelector('#data');
        this._quantidadeInput = <HTMLInputElement>document.querySelector('#quantidade');
        this._valorInput = <HTMLInputElement>document.querySelector('#valor');

        this._negociacoesView.update();
    }

    adiciona(event: Event) {
        event.preventDefault();

        let negociacao = new Negociacao(new Date(this._dataInput.value.replace(/-/g, ',')), parseInt(this._quantidadeInput.value), parseFloat(this._valorInput.value));
        this._negociacoes.adiciona(negociacao);
    }
}