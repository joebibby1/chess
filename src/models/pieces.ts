export abstract class Piece {
  isWhite: boolean;
  isTaken: boolean;
  hasMoved: boolean;
  // font awesome icon
  icon: string;
  name: string;
  constructor(isWhite: boolean, hasMoved = false) {
    this.isWhite = isWhite;
    this.isTaken = false;
    this.hasMoved = false;
  }

  abstract isValidMove(from: number[], to: number[]): boolean;
}

export class Pawn extends Piece {
  constructor(isWhite: boolean, hasMoved = false) {
    super(isWhite, hasMoved);
    this.icon = "chess-pawn";
    this.name = "Pawn";
  }
  isValidMove(from: number[], to: number[]): boolean {
    // can only move forward (how do we know which way is forward?, for now assume white always starts at 1st row)
    if (this.isWhite && from[0] > to[0]) {
      console.log(1);
      return false;
    }
    if (!this.isWhite && to[0] > from[0]) {
      console.log(2);
      return false;
    }
    // can only move 1 space at a time, unless it's the first move then it can move 2 spaces
    if (Math.sqrt(Math.pow(from[0] - to[0], 2)) > 1 && this.hasMoved) {
      console.log(3);
      return false;
    }
    console.log("distance travelled", from[0] - to[0]);
    if (Math.sqrt(Math.pow(from[0] - to[0], 2)) > 2) {
      console.log(4);
      return false;
    }
    // can move diagonally if taking a piece
    return true;
  }
}

export class Bishop extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-bishop";
    this.name = "Bishop";
  }
  isValidMove(): boolean {
    return true;
  }
}

export class Knight extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-knight";
    this.name = "Knight";
  }
  isValidMove(): boolean {
    return true;
  }
}

export class Rook extends Piece {
  constructor(isWhite: boolean, hasMoved = false) {
    super(isWhite, hasMoved);
    this.icon = "chess-rook";
    this.name = "Rook";
  }
  isValidMove(): boolean {
    return true;
  }
}

export class Queen extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-queen";
    this.name = "Queen";
  }
  isValidMove(): boolean {
    return true;
  }
}

export class King extends Piece {
  constructor(isWhite: boolean, hasMoved = false) {
    super(isWhite, hasMoved);
    this.icon = "chess-king";
    this.name = "King";
  }
  isValidMove(): boolean {
    return true;
  }
}
