import { Piece, Pawn, Rook, Knight, Bishop, Queen, King } from "./pieces";

export class Board {
  pieces: Piece[];
  boardSquares: number[][];
  constructor(pieces?: Piece[]) {
    // can pass pieces in to set up speciifc position, or intialize a new game
    this.boardSquares = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));
    if (pieces) {
      this.pieces = pieces;
    } else {
      this.initializePieces();
    }
  }

  initializePieces() {
    const whitePawns = Array(8)
      .fill(null)
      .map((_, i) => new Pawn(true, [1, i]));
    const blackPawns = Array(8)
      .fill(null)
      .map((_, i) => new Pawn(false, [6, i]));

    const whitePieces = [
      new Rook(true, [0, 0]),
      new Knight(true, [0, 1]),
      new Bishop(true, [0, 2]),
      new Queen(true, [0, 3]),
      new King(true, [0, 4]),
      new Bishop(true, [0, 5]),
      new Knight(true, [0, 6]),
      new Rook(true, [0, 7]),
    ];

    const blackPieces = [
      new Rook(false, [7, 0]),
      new Knight(false, [7, 1]),
      new Bishop(false, [7, 2]),
      new Queen(false, [7, 3]),
      new King(false, [7, 4]),
      new Bishop(false, [7, 5]),
      new Knight(false, [7, 6]),
      new Rook(false, [7, 7]),
    ];

    this.pieces = [
      ...whitePawns,
      ...blackPawns,
      ...whitePieces,
      ...blackPieces,
    ];
  }

  /**
   * Returns the piece at the given position, if one exists
   *
   * @param {number[]} position
   * @return {*}
   * @memberof Board
   */
  getActivePiece(position: number[]) {
    if (!position || !this.pieces) return;
    return this.pieces.find(
      (piece) =>
        piece.position[0] === position[0] &&
        piece.position[1] === position[1] &&
        !piece.isTaken
    );
  }

  takePiece(takingPiece: Piece, takenPiece: Piece) {
    // may need to reorder it so that there are not 2 pieces on same sqaure at any point
    const res = takingPiece.move(takenPiece.position, this.pieces);
    if (!res) return;
    takenPiece.take();
  }

  // removePiece(position: number[]) {
  //   this.pieces[position[0]][position[1]] = null;
  // }

  // new piece created when we move position
  // createNewPiece(piece: Piece, position: number[]) {
  //   let newPiece;
  //   switch (piece.name) {
  //     case "Pawn":
  //       newPiece = new Pawn(piece.isWhite, true);
  //       break;
  //     case "Rook":
  //       newPiece = new Rook(piece.isWhite, true);
  //       break;
  //     case "Knight":
  //       newPiece = new Knight(piece.isWhite);
  //       break;
  //     case "Bishop":
  //       newPiece = new Bishop(piece.isWhite);
  //       break;
  //     case "Queen":
  //       newPiece = new Queen(piece.isWhite);
  //       break;
  //     case "King":
  //       newPiece = new King(piece.isWhite, true);
  //   }
  //   this.pieces[position[0]][position[1]] = newPiece;
  // }
}
