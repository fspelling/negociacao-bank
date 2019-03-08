<<<<<<< HEAD
import { View } from './View';

export class MensagemView extends View<string> {

=======
class MensagemView extends View<string> {
>>>>>>> 984d7b80845baeb562c342b7d9cf813ef90af538
    template(model: string): string {

        return `<p class="alert alert-info">${model}</p>`;
    }
<<<<<<< HEAD

=======
>>>>>>> 984d7b80845baeb562c342b7d9cf813ef90af538
}