import { Negociacao, Negociacoes } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { injectDom, sleepFunction, Impressao } from '../helper/index';
import { NegociacaoService } from '../services/index';

export class NegociacaoController {
    @injectDom('#data')
    private _inputData: JQuery;

    @injectDom('#quantidade')
    private _inputQuantidade: JQuery;

    @injectDom('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _negociacaoService = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @sleepFunction(0)
    adiciona() {
        console.log(this._inputData.val());

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        if (!negociacao.ehDiaUtil()) {
            this._mensagemView.update('apenas dias uteis');
            return;
        }

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');

        Impressao(negociacao, this._negociacoes);
    }

    @sleepFunction()
    importarDados() {
        const isFetchOk = (response: Response): Response => {
            if (response.ok) {
                return response;
            } else {
                throw new Error(response.statusText);
            }
        };

        this._negociacaoService.obterNegociacoes(isFetchOk).then(negociacoesImportar => {
            let negociacoesImportadas = this._negociacoes.paraArray();

            let negociacoesLote = negociacoesImportar.filter(negociacao => {
                !negociacoesImportadas.some(negociacaoValid => negociacaoValid.ehIgual(negociacao));
            });

            negociacoesLote.forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);
        });
    }
}
