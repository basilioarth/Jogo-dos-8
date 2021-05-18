import Result from './models/result';
import Node from './models/Node';
import buscaLargura from './busca-largura';
import buscaProfundidade from './busca-profundidade';
import aEstrela from './a-estrela';
import heuristicaGulosa from './heuristica-gulosa';

const search = (type: number, initialPuzzle: number[]): Result => {
    const initialNode = new Node(initialPuzzle, 0, 0);

    if (!temSolucao(initialPuzzle)) return {
        path: [],
        custoMemoria: 0,
        custoTempo: 0,
        nosGerados: 0,
        profundidade: 0,
        profundidadeMaxima: 0
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
            return { path: [], custoMemoria: 0, custoTempo: 0, nosGerados: 0, profundidade: 0, profundidadeMaxima: 0 }
    }
};

const temSolucao = (puzzle: number[]) => {
    let inversoes = getInversoes(puzzle);
    return (inversoes % 2 === 0);
}

const getInversoes = (puzzle: number[]) => {
    let inversoes = 0;

    for (var i = 0; i < puzzle.length; i++) {
        for (var j = i + 1; j < puzzle.length; j++) {
            if (puzzle[i] > puzzle[j] && puzzle[j] !== 0)
                inversoes++;
        }
    }
    return inversoes;
}

export default search;