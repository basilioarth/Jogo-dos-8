import Node from "./models/Node";

const aEstrela = (root: Node): Node[] => {

    let retorno: Node[] = [];
    let open: Node[] = [];
    let closed: Node[] = [];
    let cur: Node = root;

    root.calcFScore();
    open.push(root);

    while (true) {

        if (open.length === 0) {
            break;
        }

        cur = open[0];

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
            if (adiciona) {
                open.push(cur.children[i]);
            }
        }

        closed.push(cur);
        open.shift();

        open.sort((a, b) => {
            return a.fScore - b.fScore;
        })
    }

    let path: Node[] = [];

    while (cur.parent != null) {
        path.push(cur);
        cur = cur.parent;
    }

    path = path.reverse();

    // for (let i = 0; i < path.length; i++) {
    //     console.log(path[i].puzzle[0] + " " + path[i].puzzle[1] + " " + path[i].puzzle[2]);
    //     console.log(path[i].puzzle[3] + " " + path[i].puzzle[4] + " " + path[i].puzzle[5]);
    //     console.log(path[i].puzzle[6] + " " + path[i].puzzle[7] + " " + path[i].puzzle[8]);
    //     console.log("f:" + path[i].fScore + "-----------------------------------------------------------");
    // }

    return path;
}

export default aEstrela;