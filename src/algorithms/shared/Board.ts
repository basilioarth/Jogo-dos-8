export default class Board {

    constructor(
        private objetivo: number[][],
    ) {
        objetivo = [[1, 2 ,3], [4, 5, 6], [7, 8, 0]];
    }

    /**
     * @param board 
     * @returns true se o número de inversões for par; false caso contrário
     */
    temSolucao(board: number[][]): boolean {
        return true;
    }

    /**
     * @param board 
     * @returns true se o parâmetro for igual ao objetivo; false caso contrário
     */
    verificaObjetivo(board: number[][]): boolean {
        return board === this.objetivo;
    }

    /**
     * @param board
     * @returns número de tiles estão na posição errada
     */
    hamming(board: number[][]): number {
        return 0;
    }

    /**
     * @param board 
     * @returns soma das distâncias de um número a seu tile objetivo
     */
    manhattan(board: number[][]): number {
        return 0;
    }

    /**
     * @param board 
     * @param fronteiraAtual 
     * @returns 
     */
    expandirFronteira(board: number[][], fronteiraAtual: number[][][]): number[][][] {
        let novaFronteira: number[][][] = [];

        return [...fronteiraAtual, ...novaFronteira];
    }

}

/**
 * mocks
 * 
 * estado inicial: [[1, 2, 5], [3, 4, 0], [6, 7, 8]]
 * 
 * filhos: 
 *  [[1, 2, 0], [3, 4, 5], [6, 7, 8]],  UP
 *  [[1, 2, 5], [3, 4, 8], [6, 7, 0]],  DOWN
 *  [[1, 2, 5], [3, 0, 4], [6, 7, 8]],  LEFT
 * 
 * primeiro passo: [[1, 2, 0], [3, 4, 5], [6, 7, 8]],  UP
 * 
 * filhos:
 *  [[1, 0, 2], [3, 4, 5], [6, 7, 8]],  UP
 * 
 * segundo passo: [[1, 0, 2], [3, 4, 5], [6, 7, 8]],  UP
 */
