import { Result } from './models/result';
import Node from "./models/Node";

export const buscaLargura = (root: Node): Result => {
    let frontier: Node[] = [];
    let expandedNodes: Node[] = [];
    let custoTempo: number = 1;
    let custoMemoria: number = 0;
    let currentNode: Node = root;

    frontier.push(root);
    let goalFound: boolean = false;

    while(frontier.length > 0 && !goalFound) {

        if(frontier.length > custoMemoria) custoMemoria = frontier.length;

        custoTempo++;

        currentNode = frontier[0];
        expandedNodes.push(currentNode);
        frontier.shift();

        if (currentNode.isGoal()){
            goalFound = true;
            break;
        }

        currentNode.expandNode();

        for (let i = 0; i < currentNode.children.length; i++) {

            let adiciona = true;

            for (let j = 0; j < expandedNodes.length; j++) {
                if (expandedNodes[j].isEqual(currentNode.children[i])) {
                    adiciona = false;
                    break;
                }
            }
            for (let j = 0; j < frontier.length; j++) {
                if (frontier[j].isEqual(currentNode.children[i])) {
                    adiciona = false;
                    break;
                }
            }
            if (adiciona) {
                frontier.push(currentNode.children[i]);
            }
        }
    }

    let path: Node[] = [];

    while (currentNode.parent != null) {
        path.push(currentNode);
        currentNode = currentNode.parent;
    }
    path.push(currentNode);

    path = path.reverse();

    return {
        path,
        custoTempo,
        custoMemoria
    }
}

export default buscaLargura;
