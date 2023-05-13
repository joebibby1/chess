import { Piece } from "./pieces";

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
