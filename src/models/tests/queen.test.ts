import { describe, it, expect } from "vitest";
import { Queen } from "../pieces";
import { Board } from "../board";

describe("Queen suite", () => {
  it("can move any direction", () => {
    const pawn = new Queen(true, [1, 0]);
    pawn.move([3, 0], []);

    expect(pawn.position).toStrictEqual([3, 0]);
  });
  it("can move any number of spaces", () => {
    const pawn = new Queen(true, [1, 0]);
    const res = pawn.move([4, 0], []);

    expect(pawn.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
});
