import { describe, it, expect } from "vitest";
import { Pawn } from "../pieces";
import { Board } from "../board";

describe("Pawn suite", () => {
  it("can move 2 spaces on first move", () => {
    const pawn = new Pawn(true, [1, 0]);
    pawn.move([3, 0], []);

    expect(pawn.position).toStrictEqual([3, 0]);
  });
  it("cannot move more than 2 spaces", () => {
    const pawn = new Pawn(true, [1, 0]);
    const res = pawn.move([4, 0], []);

    expect(pawn.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
  it("can move 1 space on subsequent moves", () => {
    const pawn = new Pawn(true, [1, 0]);
    pawn.move([3, 0], []);
    pawn.move([4, 0], []);
    expect(pawn.position).toStrictEqual([4, 0]);
  });
  it("cannot move more than 1 after first move", () => {
    const pawn = new Pawn(true, [1, 0]);
    pawn.move([3, 0], []);
    const res = pawn.move([5, 0], []);
    expect(pawn.position).toStrictEqual([3, 0]);
    expect(res).toBe(false);
  });
  it("cannot move backwards", () => {
    const pawn = new Pawn(true, [1, 0]);
    const res = pawn.move([0, 0], []);
    expect(pawn.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
  it("cannot move sideways", () => {
    const pawn = new Pawn(true, [1, 0]);
    const res = pawn.move([1, 1], []);
    expect(pawn.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
  it("can take diagonally", () => {
    const whitePawn = new Pawn(true, [1, 0]);
    const blackPawn = new Pawn(false, [2, 1]);
    const board = new Board([whitePawn, blackPawn]);
    board.takePiece(whitePawn, blackPawn);
    expect(whitePawn.position).toStrictEqual([2, 1]);
    expect(blackPawn.isTaken).toBe(true);
  });
  it("cannot take forward", () => {
    const whitePawn = new Pawn(true, [1, 0]);
    const blackPawn = new Pawn(false, [1, 1]);
    const board = new Board([whitePawn, blackPawn]);
    board.takePiece(whitePawn, blackPawn);
    expect(whitePawn.position).toStrictEqual([1, 0]);
    expect(blackPawn.isTaken).toBe(false);
  });
});
