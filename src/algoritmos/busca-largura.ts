import { Result } from './models/result';
import Node from "./models/Node";

export const buscaLargura = (root: Node): Result => {
    let open: Node[] = [];
    let closed: Node[] = [];
    let custoTempo: number = 1;
    let custoMemoria: number = 0;
    let current: Node = root;

    open.push(root);
    let goalFound: boolean = false;

    while(open.length > 0 && !goalFound) {

        if(open.length > custoMemoria) custoMemoria = open.length;

        custoTempo++;

        current = open[0];
        closed.push(current);
        open.shift();

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

    while (current.parent != null) {
        path.push(current);
        current = current.parent;
    }
    path.push(current);

    path = path.reverse();

    return {
        path,
        custoTempo,
        custoMemoria
    }
}

export default buscaLargura;
