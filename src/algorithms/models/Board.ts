import Node from './Node';
import { buscaLargura } from '../busca-largura';
import aEstrela from '../a-estrela';

export default class Board {

    initialNode!: Node;

    constructor(
        private initialPuzzle: number[]
    ) {
        this.initialNode = new Node(this.initialPuzzle, 0, 0);
    }

    search(type: number): Node[] | undefined {

        // console.log(this.temSolucao());
        // return undefined;

        // if (!this.temSolucao()) return undefined;

        switch (type) {
            case 0:
                return buscaLargura(this.initialNode);
            case 1:
                return aEstrela(this.initialNode);
            default:
                break;
        }

    }

    /**
     * @param board 
     * @returns true se o número de inversões for par; false caso contrário
     */
    temSolucao(): boolean {
        let inversoes = this.getInversoes();
        console.log(inversoes);
        return (inversoes % 2 === 0);
    }

    getInversoes(): number {
        let inversoes = 0;

        let arr = [];
        arr.push(this.initialPuzzle.slice(0, 3));
        arr.push(this.initialPuzzle.slice(3, 6));
        arr.push(this.initialPuzzle.slice(6, 9));

        for (let i = 0; i < 2; i++) {
            for (let j = i + 1; j < 3; j++) {
                if (arr[j][i] > 0 && arr[j][i] > arr[i][j]) {
                    console.log(arr[j][i], arr[i][j])
                    inversoes += 1;
                }
            }
        }
        return inversoes;
    }

    /**
     * @param board 
     * @returns true se o parâmetro for igual ao objetivo; false caso contrário
     */
    // verificaObjetivo(board: number[][]): boolean {
    //     return board === this.objetivo;
    // }

    /**
     * @param board
     * @returns número de tiles estão na posição errada
     */
    hamming(board: number[]): number {
        return 0;
    }

    /**
     * @param board 
     * @returns soma das distâncias de um número a seu tile objetivo
     */
    manhattan(board: number[][]): number {
        return 0;
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
