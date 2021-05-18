import { Result } from './models/result';
import Node from "./models/Node";

export const buscaProfundidade = (root: Node): Result => {
    let open: Node[] = [];
    let closed: Node[] = [];
    let custoTempo: number = 1;
    let custoMemoria: number = 0;
    let current: Node = root;
    let limit = 99;
    let nosGerados = 0;
    let profundidade = 0;
    let profundidadeMaxima = 0;

    open.push(root);
    let goalFound: boolean = false;

    while(open.length > 0 && !goalFound && limit > 0) {
        limit--;

        if(open.length > custoMemoria) custoMemoria = open.length;

        custoTempo++;

        current = open[open.length - 1];
        closed.push(current);
        open.pop();

        if (current.manhattan() === 0){
            goalFound = true;
            break;
        }

        current.expandNode();

        for (let i = 0; i < current.children.length; i++) {

            let adiciona = true;

            for (let j = 0; j < closed.length; j++) {
                if (closed[j].isEqual(current.children[i])) {
                    adiciona = false;
                    break;
                }
            }
            for (let j = 0; j < open.length; j++) {
                if (open[j].isEqual(current.children[i])) {
                    adiciona = false;
                    break;
                }
            }
            if (adiciona) {
                open.push(current.children[i]);
            }
        }
    }

    let path: Node[] = [];
    nosGerados = closed.length + open.length;
    profundidade = current.level;

    open.map((node: Node) => {
        if (node.level > profundidadeMaxima) profundidadeMaxima = node.level;
    })
    closed.map((node: Node) => {
        if (node.level > profundidadeMaxima) profundidadeMaxima = node.level;
    })

    while (current.parent != null) {
        path.push(current);
        current = current.parent;
    }
    path.push(current);

    path = path.reverse();

    return {
        path,
        custoTempo,
        custoMemoria,
        nosGerados,
        profundidade,
        profundidadeMaxima
    }
}

export default buscaProfundidade;
