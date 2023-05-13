export abstract class Piece {
  isWhite: boolean;
  isTaken: boolean;
  // font awesome icon
  icon: string;
  name: string;
  constructor(isWhite: boolean) {
    this.isWhite = isWhite;
    this.isTaken = false;
  }

  abstract isValidMove(): boolean;
}

export class Pawn extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-pawn";
    this.name = "Pawn";
  }
  isValidMove(): boolean {
    // first move can move 2 spaces
    // can only move forward
    // can only move diagonally if taking a piece
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
  constructor(isWhite: boolean) {
    super(isWhite);
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
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-king";
    this.name = "King";
  }
  isValidMove(): boolean {
    return true;
  }
}
