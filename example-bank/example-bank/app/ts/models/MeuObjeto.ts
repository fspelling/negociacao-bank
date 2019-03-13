import { Imprime, Igualavel } from "./index";

export interface MeuObjeto<T> extends Imprime, Igualavel<T> {
}