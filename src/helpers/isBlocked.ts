import { Piece } from "../models/pieces";
import { returnMovementPath } from "./returnMovementPath";

export function isBlocked(
  destination: number[],
  piece: Piece,
  otherPieces: Piece[]
) {
  // is blocked if a friendly piece is on the sqaure
  // or if another piece friendly or not is in the movement path to the square

  const friendlyPieceIsOnDestinationSquare = otherPieces.some((otherPiece) => {
    return (
      otherPiece.position[0] === destination[0] &&
      otherPiece.position[1] === destination[1] &&
      !otherPiece.isTaken &&
      piece.isWhite === otherPiece.isWhite
    );
  });

  const anyPieceIsOnSqaure = (position: number[]) => {
    return otherPieces.some((otherPiece) => {
      return (
        otherPiece.position[0] === position[0] &&
        otherPiece.position[1] === position[1] &&
        !otherPiece.isTaken
      );
    });
  };

  const movementPath = returnMovementPath(piece.position, destination);
  movementPath.forEach;

  // need to check the piece type, calculate the sqaures passed through to this destination
  // then check all of those sqaures for a piece
}
