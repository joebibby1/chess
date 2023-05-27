export abstract class Piece {
  isWhite: boolean;
  isTaken: boolean;
  hasMoved: boolean;
  // font awesome icon
  icon: string;
  name: string;
  position: number[];
  constructor(isWhite: boolean, initialPosition: number[]) {
    this.isWhite = isWhite;
    this.position = initialPosition;
    this.isTaken = false;
    this.hasMoved = false;
  }

  abstract move(to: number[], otherPieces: Piece[]): boolean;
  abstract take(): void;
}

export class Pawn extends Piece {
  constructor(isWhite: boolean, initialPosition: number[]) {
    super(isWhite, initialPosition);
    this.icon = "chess-pawn";
    this.name = "Pawn";
    this.position = initialPosition;
  }
  take() {
    this.isTaken = true;
  }

  move(to: number[], otherPieces: Piece[]): boolean {
    const distanceTravelled = Math.abs(this.position[0] - to[0]);
    const isTaking = otherPieces.find(
      (piece) =>
        piece.position[0] === to[0] &&
        piece.position[1] === to[1] &&
        !piece.isTaken
    );
    // cant move more than 2
    if (distanceTravelled > 2) return false;
    // can move 2 only on first move
    if (distanceTravelled === 2 && this.hasMoved) return false;
    // cant move back
    if (this.isWhite && this.position[0] > to[0]) return false;
    if (!this.isWhite && this.position[0] < to[0]) return false;
    // cant move sideways
    if (this.position[1] !== to[1] && !isTaking) return false;
    // can only take diagonally
    if (this.position[0] === to[0] && isTaking) return false;

    console.log("from", this.position);
    console.log("to", to);
    // execute the move
    this.position = to;
    this.hasMoved = true;
    return true;

    // // can only move forward (how do we know which way is forward?, for now assume white always starts at 1st row)
    // if (this.isWhite && from[0] > to[0]) {
    //   console.log(1);
    //   return false;
    // }
    // if (!this.isWhite && to[0] > from[0]) {
    //   console.log(2);
    //   return false;
    // }
    // // can only move 1 space at a time, unless it's the first move then it can move 2 spaces
    // if (Math.sqrt(Math.pow(from[0] - to[0], 2)) > 1 && this.hasMoved) {
    //   console.log(3);
    //   return false;
    // }
    // console.log("distance travelled", from[0] - to[0]);
    // if (Math.sqrt(Math.pow(from[0] - to[0], 2)) > 2) {
    //   console.log(4);
    //   return false;
    // }
    // // can move diagonally if taking a piece
    // return true;
  }
}

export class Bishop extends Piece {
  constructor(isWhite: boolean, initialPosition: number[]) {
    super(isWhite, initialPosition);
    this.icon = "chess-bishop";
    this.name = "Bishop";
  }
  move(to: number[], otherPieces: Piece[]): boolean {
    // can't move along files
    // can't move along ranks
    if (this.position[0] === to[0] || this.position[1] === to[1]) return false;

    this.position = to;
    return true;
  }
  take() {
    this.isTaken = true;
  }
}

export class Knight extends Piece {
  constructor(isWhite: boolean, initialPosition: number[]) {
    super(isWhite, initialPosition);
    this.icon = "chess-knight";
    this.name = "Knight";
  }
  move(to: number[], otherPieces: Piece[]): boolean {
    this.position = to;
    return true;
  }

  take() {
    this.isTaken = true;
  }
}

export class Rook extends Piece {
  constructor(isWhite: boolean, initialPosition: number[]) {
    super(isWhite, initialPosition);
    this.icon = "chess-rook";
    this.name = "Rook";
  }
  move(to: number[], otherPieces: Piece[]): boolean {
    this.position = to;
    return true;
  }

  take() {
    this.isTaken = true;
  }
}

export class Queen extends Piece {
  constructor(isWhite: boolean, initialPosition: number[]) {
    super(isWhite, initialPosition);
    this.icon = "chess-queen";
    this.name = "Queen";
  }
  move(to: number[], otherPieces: Piece[]): boolean {
    this.position = to;
    return true;
  }

  take() {
    this.isTaken = true;
  }
}

export class King extends Piece {
  constructor(isWhite: boolean, initialPosition: number[]) {
    super(isWhite, initialPosition);
    this.icon = "chess-king";
    this.name = "King";
  }
  move(to: number[], otherPieces: Piece[]): boolean {
    this.position = to;
    return true;
  }

  take() {
    this.isTaken = true;
  }
}
