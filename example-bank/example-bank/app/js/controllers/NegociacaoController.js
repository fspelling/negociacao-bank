System.register(["../models/index", "../views/index", "../helper/decorators/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, index_4, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._negociacaoService = new index_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona() {
                    console.log(this._inputData.val());
                    const negociacao = new index_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    if (!negociacao.ehDiaUtil()) {
                        this._mensagemView.update('apenas dias uteis');
                        return;
                    }
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                importarDados() {
                    this._negociacaoService.obterNegociacoes(this._isFetchOk).then(negociacoes => {
                        negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    });
                }
                _isFetchOk(response) {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        throw new Error(response.statusText);
                    }
                }
            };
            __decorate([
                index_3.injectDom('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.injectDom('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.injectDom('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.sleepFunction(0)
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.sleepFunction()
            ], NegociacaoController.prototype, "importarDados", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
