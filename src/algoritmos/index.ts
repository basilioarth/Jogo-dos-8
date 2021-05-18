import { Result } from './models/result';
import Node from './models/Node';
import { buscaLargura } from './busca-largura';
import { buscaProfundidade } from './busca-profundidade';
import aEstrela from './a-estrela';
import heuristicaGulosa from './heuristica-gulosa';

const search = (type: number, initialPuzzle: number[]): Result => {
    const initialNode = new Node(initialPuzzle, 0, 0);

    if (!temSolucao(initialPuzzle)) return {
        path: [],
        custoMemoria: 0,
        custoTempo: 0
    }

    switch (type) {
        case 0:
            return buscaLargura(initialNode);
        case 1:
            return buscaProfundidade(initialNode);
        case 2:
            return heuristicaGulosa(initialNode);
        case 3:
            return aEstrela(initialNode);
        default:
            return {path: [], custoMemoria: 0, custoTempo: 0}
    }
};

const temSolucao = (puzzle: number[]) => {
    let inversoes = getInversoes(puzzle);
    return (inversoes % 2 === 0);
}

const getInversoes = (puzzle: number[]) => {
    let inversoes = 0;

        let arr = [];
        arr.push(puzzle.slice(0, 3));
        arr.push(puzzle.slice(3, 6));
        arr.push(puzzle.slice(6, 9));

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

export default search;