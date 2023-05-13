export abstract class Piece {
  isWhite: boolean;
  isTaken: boolean;
  // font awesome icon
  icon: string;
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
  }
  isValidMove(): boolean {
    return true;
  }
}

export class Knight extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-knight";
  }
  isValidMove(): boolean {
    return true;
  }
}

export class Rook extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-rook";
  }
  isValidMove(): boolean {
    return true;
  }
}

export class Queen extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-queen";
  }
  isValidMove(): boolean {
    return true;
  }
}

export class King extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
    this.icon = "chess-king";
  }
  isValidMove(): boolean {
    return true;
  }
}
