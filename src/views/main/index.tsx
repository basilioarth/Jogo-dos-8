import { useEffect, useState } from "react";
import Board from "../../algorithms/models/Board";
import Node from "../../algorithms/models/Node";

const Main = () => {

    let board = new Board([4, 1, 2, 0, 5, 3, 6, 7, 8]);

    const [solucao, setSolucao] = useState<Node[]>([]);

    useEffect(() => {
       setSolucao(board.search(0) || []);
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