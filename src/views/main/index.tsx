import { useEffect, useState } from "react";
import Board from "../../algorithms/models/Board";
import Node from "../../algorithms/models/Node";

const Main = () => {

    // let board = new Board([4, 1, 2, 0, 5, 3, 6, 7, 8]);
    // let board = new Board([0, 7, 2, 1, 4, 3, 6, 8, 5]);
    // let board = new Board([1, 2, 3, 0, 4, 6, 7, 5, 8]);
    // let board = new Board([1, 2, 3, 4, 7, 5, 6, 8, 0]);
    let board = new Board([0, 1, 2, 4, 5, 3, 6, 7, 8]);

    const [solucao, setSolucao] = useState<Node[]>([]);

    useEffect(() => {
       setSolucao(board.search(1) || []);
    }, [])

    return (
        <div>
            {
                solucao.length > 0 ? 
                solucao.map((node: Node) => <h2>{ node.puzzle }</h2>)
                : <h2>Não possui solução</h2>
            }
        </div>
    )
}

export default Main;