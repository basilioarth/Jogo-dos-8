import { Result } from './models/result';
import Node from "./models/Node";

const aEstrela = (root: Node): Result => {

    let open: Node[] = [];
    let closed: Node[] = [];
    let cur: Node = root;
    let custoMemoria = 1;
    let custoTempo = 0;

    root.calcFScore();
    open.push(root);

    while (true) {

        if (open.length === 0) {
            break;
        }

        cur = open[0];

        custoTempo++;
        if (cur.manhattan() === 0) {
            break;
        }

        cur.expandNode();

        for (let i = 0; i < cur.children.length; i++) {

            cur.children[i].calcFScore();
            let adiciona = true;

            for (let j = 0; j < closed.length; j++) {
                if (closed[j].isEqual(cur.children[i])) {
                    adiciona = false;
                    break;
                }
            }
            for (let j = 0; j < open.length; j++) {
                if (open[j].isEqual(cur.children[i])) {
                    adiciona = false;
                    break;
                }
            }
            if (adiciona) {
                open.push(cur.children[i]);
            }
        }

        closed.push(cur);
        open.shift();
        if (open.length > custoMemoria) {
            custoMemoria = open.length;
        }

        open.sort((a, b) => {
            return a.fScore - b.fScore;
        })
    }

    let path: Node[] = [];

    while (cur.parent != null) {
        path.push(cur);
        cur = cur.parent;
    }
    path.push(cur);

    path = path.reverse();

    return {
        path,
        custoTempo,
        custoMemoria
    }
}

export default aEstrela;
