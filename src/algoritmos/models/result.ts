import Node from "./Node";

export default interface Result {
    path: Node[] 
    custoTempo: number 
    custoMemoria: number
    nosGerados: number
    profundidade: number
    profundidadeMaxima: number
}