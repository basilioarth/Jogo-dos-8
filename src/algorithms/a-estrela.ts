import { Result } from './models/result';
import Node from "./models/Node";

const aEstrela = (root: Node): Result => {

    let open: Node[] = [];
    let closed: Node[] = [];
    let current: Node = root;
    let custoMemoria = 1;
    let custoTempo = 0;

    root.calcFScore();
    open.push(root);

    while (true) {

        if (open.length === 0) {
            break;
        }

        current = open[0];

        custoTempo++;
        if (current.manhattan() === 0) {
            break;
        }

        current.expandNode();

        for (let i = 0; i < current.children.length; i++) {

            current.children[i].calcFScore();
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

        closed.push(current);
        open.shift();
        if (open.length > custoMemoria) {
            custoMemoria = open.length;
        }

        open.sort((a, b) => {
            return a.fScore - b.fScore;
        })
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

export default aEstrela;
