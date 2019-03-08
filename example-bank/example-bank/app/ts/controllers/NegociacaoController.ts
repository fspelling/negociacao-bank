<<<<<<< HEAD
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negociacao';
import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
=======
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
>>>>>>> 984d7b80845baeb562c342b7d9cf813ef90af538
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}