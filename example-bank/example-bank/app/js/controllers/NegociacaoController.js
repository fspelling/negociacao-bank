class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'));
        this._dataInput = document.querySelector('#data');
        this._quantidadeInput = document.querySelector('#quantidade');
        this._valorInput = document.querySelector('#valor');
        this._negociacoesView.update();
    }
    adiciona(event) {
        event.preventDefault();
        let negociacao = new Negociacao(new Date(this._dataInput.value.replace(/-/g, ',')), parseInt(this._quantidadeInput.value), parseFloat(this._valorInput.value));
        this._negociacoes.adiciona(negociacao);
    }
}
