import { Piece, Pawn, Rook, Knight, Bishop, Queen, King } from "./pieces";

export class Board {
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
    this.pieces[1] = Array(8)
      .fill(null)
      .map(() => new Pawn(true));
    this.pieces[6] = Array(8)
      .fill(null)
      .map(() => new Pawn(false));
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

  removePiece(position: number[]) {
    this.pieces[position[0]][position[1]] = null;
  }

  // new piece created when we move position
  createNewPiece(piece: Piece, position: number[]) {
    let newPiece;
    switch (piece.name) {
      case "Pawn":
        newPiece = new Pawn(piece.isWhite, true);
        break;
      case "Rook":
        newPiece = new Rook(piece.isWhite, true);
        break;
      case "Knight":
        newPiece = new Knight(piece.isWhite);
        break;
      case "Bishop":
        newPiece = new Bishop(piece.isWhite);
        break;
      case "Queen":
        newPiece = new Queen(piece.isWhite);
        break;
      case "King":
        newPiece = new King(piece.isWhite, true);
    }
    this.pieces[position[0]][position[1]] = newPiece;
  }

  movePiece(from: number[], to: number[]) {
    // check if valid move
    // if valid move, move piece
    // else throw error
    const piece = this.pieces[from[0]][from[1]];
    if (!piece) {
      return;
    }

    console.log("piece", piece);
    console.log("valid", piece.isValidMove(from, to));

    if (!piece.isValidMove(from, to)) {
      return;
    }

    this.createNewPiece(piece, to);
    this.removePiece(from);
  }
}
