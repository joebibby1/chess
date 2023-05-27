import { describe, it, expect } from "vitest";
import { King } from "../pieces";
import { Board } from "../board";

describe("King suite", () => {
  it("can't move more than 1'", () => {
    const pawn = new King(true, [1, 0]);
    pawn.move([3, 0], []);

    expect(pawn.position).toStrictEqual([3, 0]);
  });
  it("can't put itself into check'", () => {
    const pawn = new King(true, [1, 0]);
    const res = pawn.move([4, 0], []);

    expect(pawn.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
  it("can move and take any direction", () => {
    const pawn = new King(true, [1, 0]);
    pawn.move([3, 0], []);
    pawn.move([4, 0], []);
    expect(pawn.position).toStrictEqual([4, 0]);
  });
});
