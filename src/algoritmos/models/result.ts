import Node from "./Node";

export interface Result {
    path: Node[] 
    custoTempo: number // quantidade de nós visitados
    custoMemoria: number // quantidade máxima de nós na fronteira
    nosGerados: number
    profundidade: number
    profundidadeMaxima: number
}