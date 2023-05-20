import { describe, it, expect } from "vitest";
import { Pawn } from "./pieces";
import { Board } from "./board";

describe("Pawn suite", () => {
  it("can move 2 spaces on first move", () => {
    const pawn = new Pawn(true, [1, 0]);
    pawn.move([3, 0], []);

    expect(pawn.position).toStrictEqual([3, 0]);
  });
  it("can move 1 space on subsequent moves", () => {
    const pawn = new Pawn(true, [1, 0]);
    expect(true).toBe(false);
  });
  // it("can move 2 spaces on first move", () => {
  //   expect(true).toBe(true);
  // });
});
