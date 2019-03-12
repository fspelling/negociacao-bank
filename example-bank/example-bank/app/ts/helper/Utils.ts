import { Imprime } from "../models/Imprime";

export function Impressao(...impressoes: Imprime[]) {
    impressoes.forEach((impressao => impressao.imprimir()));
}