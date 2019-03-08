<<<<<<< HEAD
import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

export class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {
=======
class NegociacoesView extends View<Negociacao[]> {
>>>>>>> 984d7b80845baeb562c342b7d9cf813ef90af538

        return `
        <table class="table table-hover table-bordered">
<<<<<<< HEAD
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao => 
                     `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() +1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        <tr>
                     `   
                ).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
=======
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        ${model.map(negociacao => {
            return `
            <tr>
                <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                <td>${negociacao.volume}</td>
            </tr>
            `;
        }).join('')}
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
>>>>>>> 984d7b80845baeb562c342b7d9cf813ef90af538
        `;
    }
}