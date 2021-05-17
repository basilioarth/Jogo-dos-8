export default class Node {

    parent: Node | null = null;
    children: Node[] = [];
    puzzle!: number[];
    goal: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];

    /** quantidade de colunas */
    col: number = 3;

    constructor(p: number[]) {
        this.puzzle = p;
    }

    expandNode(): void{
        let x = null;
        
        this.puzzle.map((p, index) => {
            if(p === 0) {
                x = index;
            }
        })
        
        if(x) {
            this.moveToRight(this.puzzle, x);
            this.moveToLeft(this.puzzle, x);
            this.moveToUp(this.puzzle, x);
            this.moveToDown(this.puzzle, x);
        }
    }

    moveToRight(p: number[], index: number): void{
        if(index % this.col < this.col -1) {

            let puzzle_copy = [...p];

            let aux = puzzle_copy[index + 1];
            puzzle_copy[index + 1] = puzzle_copy[index];
            puzzle_copy[index] = aux;

            let node = new Node(puzzle_copy);

            this.children.push(node);
            node.parent = this;
        }
    }

    moveToLeft(p: number[], index: number): void{
        if(index % this.col > 0) {

            let puzzle_copy = [...p];

            let aux = puzzle_copy[index - 1];
            puzzle_copy[index - 1] = puzzle_copy[index];
            puzzle_copy[index] = aux;

            let node = new Node(puzzle_copy);

            this.children.push(node);
            node.parent = this;
        }
    }
    moveToUp(p: number[], index: number): void{
        if(index - this.col >= 0) {

            let puzzle_copy = [...p];

            let aux = puzzle_copy[index - this.col];
            puzzle_copy[index - this.col] = puzzle_copy[index];
            puzzle_copy[index] = aux;

            let node = new Node(puzzle_copy);

            this.children.push(node);
            node.parent = this;
        }
    }
    moveToDown(p: number[], index: number): void{
        if(index + this.col < p.length) {

            let puzzle_copy = [...p];

            let aux = puzzle_copy[index + this.col];
            puzzle_copy[index + this.col] = puzzle_copy[index];
            puzzle_copy[index] = aux;

            let node = new Node(puzzle_copy);

            this.children.push(node);
            node.parent = this;
        }
    }

    isGoal(): boolean {
        return !(this.puzzle.filter((n, i) => n != this.goal[i]).length > 0);
    }
    
    printPuzzle(): void{

    }
} 
