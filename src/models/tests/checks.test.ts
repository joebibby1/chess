import { describe, it, expect } from "vitest";
import { Bishop } from "../pieces";
import { Board } from "../board";

describe("Checks suite", () => {
  it("pieces cannot move if in check", () => {
    const bishop = new Bishop(true, [1, 0]);
    bishop.move([3, 0], []);

    expect(bishop.position).toStrictEqual([1, 0]);
  });
  it("can't move along rows", () => {
    const bishop = new Bishop(true, [1, 0]);
    const res = bishop.move([1, 5], []);

    expect(bishop.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
});
