class NegociacaoController {
    private _dataInput: HTMLInputElement;
    private _quantidadeInput: HTMLInputElement;
    private _valorInput: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'));
    private _mensagemView = new MensagemView(document.querySelector('#mensagemView'));

    constructor() {
        this._dataInput = <HTMLInputElement>document.querySelector('#data');
        this._quantidadeInput = <HTMLInputElement>document.querySelector('#quantidade');
        this._valorInput = <HTMLInputElement>document.querySelector('#valor');

        this._negociacoesView.update(this._negociacoes.paraArray());
    }

    adiciona(event: Event) {
        event.preventDefault();

        let negociacao = new Negociacao(new Date(this._dataInput.value.replace(/-/g, ',')), parseInt(this._quantidadeInput.value), parseFloat(this._valorInput.value));
        
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes.paraArray());
        this._mensagemView.update('cadastro realizado com sucesso');
    }
}