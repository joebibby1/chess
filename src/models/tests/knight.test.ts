import { describe, it, expect } from "vitest";
import { Knight } from "../pieces";
import { Board } from "../board";

describe("Knight suite", () => {
  it("can move an L shape", () => {
    const pawn = new Knight(true, [1, 0]);
    pawn.move([3, 0], []);

    expect(pawn.position).toStrictEqual([3, 0]);
  });
  it("can move a reverse L shape", () => {
    const pawn = new Knight(true, [1, 0]);
    const res = pawn.move([4, 0], []);

    expect(pawn.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
  it("can't move along files or rows'", () => {
    const pawn = new Knight(true, [1, 0]);
    pawn.move([3, 0], []);
    pawn.move([4, 0], []);
    expect(pawn.position).toStrictEqual([4, 0]);
  });
  it("can't move along diagonals", () => {
    const pawn = new Knight(true, [1, 0]);
    pawn.move([3, 0], []);
    const res = pawn.move([5, 0], []);
    expect(pawn.position).toStrictEqual([3, 0]);
    expect(res).toBe(false);
  });
  it("can move over other pieces", () => {
    const pawn = new Knight(true, [1, 0]);
    const res = pawn.move([0, 0], []);
    expect(pawn.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
});
