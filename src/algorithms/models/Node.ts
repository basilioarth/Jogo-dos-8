
export default class Node {

    parent: Node | null = null;
    children: Node[] = [];
    puzzle!: number[];
    goal: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    fScore!: number;
    level!: number;

    /** quantidade de colunas */
    col: number = 3;

    constructor(p: number[], f: number, l: number) {
        this.puzzle = p;
        this.fScore = f;
        this.level = l;
    }

    expandNode(): void {
        let x = null;

        this.puzzle.forEach((p, index) => {
            if (p === 0) {
                x = index;
            }
        })

        if (x != null) {
        
            this.moveToLeft(this.puzzle, x);
            this.moveToRight(this.puzzle, x);
            this.moveToUp(this.puzzle, x);
            this.moveToDown(this.puzzle, x);
        }
    }

    moveToRight(p: number[], index: number): void {
        if (index % this.col < this.col - 1) {

            let puzzle_copy = [...p];

            let aux = puzzle_copy[index + 1];
            puzzle_copy[index + 1] = puzzle_copy[index];
            puzzle_copy[index] = aux;

            let node = new Node(puzzle_copy, 0, this.level + 1);

            this.children.push(node);
            node.parent = this;
        }
    }

    moveToLeft(p: number[], index: number): void {
        if (index % this.col > 0) {

            let puzzle_copy = [...p];

            let aux = puzzle_copy[index - 1];
            puzzle_copy[index - 1] = puzzle_copy[index];
            puzzle_copy[index] = aux;

            let node = new Node(puzzle_copy, 0, this.level + 1);

            this.children.push(node);
            node.parent = this;
        }
    }
    moveToUp(p: number[], index: number): void {
        if (index - this.col >= 0) {

            let puzzle_copy = [...p];

            let aux = puzzle_copy[index - this.col];
            puzzle_copy[index - this.col] = puzzle_copy[index];
            puzzle_copy[index] = aux;

            let node = new Node(puzzle_copy, 0, this.level + 1);

            this.children.push(node);
            node.parent = this;
        }
    }
    moveToDown(p: number[], index: number): void {
        if (index + this.col < p.length) {

            let puzzle_copy = [...p];

            let aux = puzzle_copy[index + this.col];
            puzzle_copy[index + this.col] = puzzle_copy[index];
            puzzle_copy[index] = aux;

            let node = new Node(puzzle_copy, 0, this.level + 1);

            this.children.push(node);
            node.parent = this;
        }
    }

    isGoal(): boolean {
        return !(this.puzzle.filter((n, i) => n !== this.goal[i]).length > 0);
    }

    printPuzzle(): void {

    }

    manhattan(): number {
        let m = 0;
        for (let i = 0; i < this.puzzle.length; i++) {
            m += Math.abs(Math.floor(i / this.col) - Math.floor(this.goal.indexOf(this.puzzle[i]) / this.col)) + Math.abs((i % this.col) - (this.goal.indexOf(this.puzzle[i]) % this.col));
        }
        return m;

    }

    hamming(): number {
        let h = 0;
        for (let i = 0; i < this.puzzle.length; i++) {
            if (this.puzzle[i] !== this.goal[i] && this.puzzle[i] !== 0) {
                h++;
            }
        }
        return h;
    }

    calcFScore(): number {
        this.fScore = this.manhattan() + this.level;
        return this.fScore;
    }

    isEqual(n: Node): boolean {
        for (let i = 0; i < this.puzzle.length; i++) {
            if (this.puzzle[i] != n.puzzle[i]) {
                return false;
            }
        }
        return true;
    }
}
