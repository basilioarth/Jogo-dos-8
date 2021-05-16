import Node from "./models/Node";

const aEstrela = (root: Node): Node[] => {

    let retorno: Node[] = [];
    let open: Node[] = [];
    let closed: Node[] = [];
    let cur: Node;

    open.push(root);
    while (true) {
        cur = open[0];
        console.log(cur.puzzle[0] + " " + cur.puzzle[1] + " " + cur.puzzle[2]);
        console.log(cur.puzzle[3] + " " + cur.puzzle[4] + " " + cur.puzzle[5]);
        console.log(cur.puzzle[6] + " " + cur.puzzle[7] + " " + cur.puzzle[8]);
        console.log("-----------------------------------------------------------");
        if (cur.hamming() === 0) {
            break;
        }
        cur.expandNode();
        for (let i = 0; i < cur.children.length; i++) {
            cur.children[i].calcFScore();
            open.push(cur.children[i]);
        }
        closed.push(cur);
        open.shift();
        open.sort((a, b) => {
            return a.fScore - b.fScore;
        })
    }

    return retorno;
}

export default aEstrela;