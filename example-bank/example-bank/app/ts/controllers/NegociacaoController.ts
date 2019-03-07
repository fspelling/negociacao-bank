class NegociacaoController {
    private _dataInput: JQuery;
    private _quantidadeInput: JQuery;
    private _valorInput: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView($('#negociacoesView'));
    private _mensagemView = new MensagemView($('#mensagemView'));

    constructor() {
        this._dataInput = $('#data');
        this._quantidadeInput = $('#quantidade');
        this._valorInput = $('#valor');

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