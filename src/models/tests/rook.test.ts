import { describe, it, expect } from "vitest";
import { Rook } from "../pieces";
import { Board } from "../board";

describe("Rook suite", () => {
  it("can move along rows", () => {
    const pawn = new Rook(true, [1, 0]);
    pawn.move([3, 0], []);

    expect(pawn.position).toStrictEqual([3, 0]);
  });
  it("can move along files", () => {
    const pawn = new Rook(true, [1, 0]);
    const res = pawn.move([4, 0], []);

    expect(pawn.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
  it("can castle", () => {
    const pawn = new Rook(true, [1, 0]);
    pawn.move([3, 0], []);
    pawn.move([4, 0], []);
    expect(pawn.position).toStrictEqual([4, 0]);
  });
  it("can't move diagonally", () => {
    const pawn = new Rook(true, [1, 0]);
    pawn.move([3, 0], []);
    pawn.move([4, 0], []);
    expect(pawn.position).toStrictEqual([4, 0]);
  });
});
