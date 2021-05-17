import Node from "./models/Node";

export const buscaLargura = (root: Node): Node[] => {
    let pathSolution: Node[] = [];
    let frontier: Node[] = [];
    let expandedNodes: Node[] = [];
    let expandedNodesCount: number = 1;
    let custoMemoria: number = 0;

    frontier.push(root);
    let goalFound: boolean = false;

    while(frontier.length > 0 && !goalFound) {

        if(frontier.length > custoMemoria) custoMemoria = frontier.length;

        let currentNode = frontier[0];
        expandedNodes.push(currentNode);
        frontier.shift();

        currentNode.expandNode();

        console.log(currentNode.children);

        currentNode.children.map(child => {
            expandedNodesCount++;

            
            if(child.isGoal()) {
                goalFound = true;
                pathTrace(pathSolution, child);
                return;
            }

            if(!frontier.includes(child) && !expandedNodes.includes(child)) {
                frontier.push(child);
            }
        });
    }

    return pathSolution;
}

const pathTrace = (path: Node[], node: Node) => {

    let current = node;
    path.push(current);

    // console.log(path);

    while(current.parent) {
        current = current.parent;
        path.push(current);
    }
}

export default buscaLargura;
