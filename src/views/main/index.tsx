import { useState } from "react";
import search from "../../algoritmos";
import Node from "../../algoritmos/models/Node";

const algoritmos = ["Busca cega - largura", "Busca cega - profundidade", "Busca gulosa", "A*"];

const Main = () => {

    const [solucoes, setSolucoes] = useState<any>([]);
    const [value, setValue] = useState<string>('');
    const [algoritmo, setAlgoritmo] = useState<string>("0");

    const castInput = () => value?.split('-').map(v => parseInt(v));

    const handleButton = () => {
        if (value.length < 17) {
            alert('Insira o valor inicial corretamente!');
            return;
        }

        setSolucoes([
            ...solucoes,
            {
                board: search(parseInt(algoritmo), castInput()),
                algoritmo,
            }
        ]);
    }

    return (
        <div>
            <div>
                <h3>Insira o estado inicial, da esquerda para direita, do topo para baixo, 9 números separados por -, onde o "0" representa o campo em branco.</h3>
                <div>
                    <input value={value} onChange={(e) => setValue(e.target.value.replace(/[^0-8-]/g, ""))} type="text" pattern="\d+" maxLength={17} />
                    <select style={{
                        margin: 10
                    }} name="algoritmos" id="algoritmos" defaultValue={algoritmo} onChange={(e) => setAlgoritmo(e.target.value)}>
                        <option value="0">Busca cega - largura</option>
                        <option value="1">Busca cega - profundidade</option>
                        <option value="2">Busca gulosa</option>
                        <option value="3">A*</option>
                    </select>
                    <button style={{
                        margin: 5
                    }} onClick={handleButton}>Solucionar</button>
                    <button style={{
                        margin: 5
                    }} onClick={() => setSolucoes([])}>Limpar</button>
                </div>
                <span><strong>Recadinhos da paróquia:</strong> o limite de iterações para busca em profundidade é igual a 100!</span>
            </div>

            {
                solucoes.map((solucao: any, index: number) => (
                    <div key={index} style={{
                        border: '2px solid #ccc',
                        margin: 5,
                        padding: 8
                    }}>
                        <h3>{algoritmos[parseInt(solucao.algoritmo)]} </h3>
                    {
                    solucao?.board.path.length > 0 ?
                        solucao?.board.path.map((node: Node, index: number) => (
                                <div key={index} style={{
                                    border: '2px solid #000',
                                    margin: 5,
                                    display: 'flex',
                                    maxWidth: 50,
                                    padding: 5,
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    }}>
                                        <span>{node.puzzle[0]}</span>
                                        <span>{node.puzzle[1]}</span>
                                        <span>{node.puzzle[2]}</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    }}>
                                        <span>{node.puzzle[3]}</span>
                                        <span>{node.puzzle[4]}</span>
                                        <span>{node.puzzle[5]}</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    }}>
                                        <span>{node.puzzle[6]}</span>
                                        <span>{node.puzzle[7]}</span>
                                        <span>{node.puzzle[8]}</span>
                                    </div>
                                </div>
                                
                        ))
                        : <h2>Não existe solução!</h2>
                     }
                     <h4>Custo de memória: { solucao.board.custoMemoria }</h4>
                     <h4>Custo de tempo: { solucao.board.custoTempo }</h4>
                     <h4>Nós gerados: { solucao.board.nosGerados }</h4>
                     <h4>Profundidade da solução: { solucao.board.profundidade }</h4>
                     <h4>Profundidade máxima: { solucao.board.profundidadeMaxima }</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default Main;