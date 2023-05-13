class Board {
  pieces: (Piece | null)[][];
  constructor() {
    this.pieces = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));
    this.pieces[0] = [
      new Rook(true),
      new Knight(true),
      new Bishop(true),
      new Queen(true),
      new King(true),
      new Bishop(true),
      new Knight(true),
      new Rook(true),
    ];
    this.pieces[1] = Array(8).fill(new Pawn(true));
    this.pieces[6] = Array(8).fill(new Pawn(false));
    this.pieces[7] = [
      new Rook(false),
      new Knight(false),
      new Bishop(false),
      new Queen(false),
      new King(false),
      new Bishop(false),
      new Knight(false),
      new Rook(false),
    ];
  }

  movePiece(from: number[], to: number[]) {
    // check if valid move
    // if valid move, move piece
    // else throw error
    this.pieces[to[0]][to[1]] = this.pieces[from[0]][from[1]];
    this.pieces[from[0]][from[1]] = null;
  }
}

abstract class Piece {
  isWhite: boolean;
  isTaken: boolean;

  constructor(isWhite: boolean) {
    this.isWhite = isWhite;
    this.isTaken = false;
  }

  abstract isValidMove(): boolean;
}

class Pawn extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }
  isValidMove(): boolean {
    // first move can move 2 spaces
    // can only move forward
    // can only move diagonally if taking a piece
    return true;
  }
}

class Bishop extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }
  isValidMove(): boolean {
    return true;
  }
}

class Knight extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }
  isValidMove(): boolean {
    return true;
  }
}

class Rook extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }
  isValidMove(): boolean {
    return true;
  }
}

class Queen extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }
  isValidMove(): boolean {
    return true;
  }
}

class King extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }
  isValidMove(): boolean {
    return true;
  }
}
