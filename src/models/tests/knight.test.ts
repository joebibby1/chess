import { describe, it, expect } from "vitest";
import { Knight } from "../pieces";
import { Board } from "../board";

describe("Knight suite", () => {
  it("can move an L shape", () => {
    const knight = new Knight(true, [0, 0]);
    knight.move([2, 1], []);

    expect(knight.position).toStrictEqual([2, 1]);
  });
  it("can move a reverse L shape", () => {
    const knight = new Knight(true, [1, 0]);
    const res = knight.move([4, 0], []);

    expect(knight.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
  it("can't move along files'", () => {
    const knight = new Knight(true, [1, 0]);
    knight.move([3, 0], []);
    expect(knight.position).toStrictEqual([1, 0]);
  });
  it("can't move along rows'", () => {
    const knight = new Knight(true, [1, 0]);
    knight.move([1, 3], []);
    expect(knight.position).toStrictEqual([1, 0]);
  });
  it("can't move along diagonals", () => {
    const knight = new Knight(true, [1, 0]);
    knight.move([2, 1], []);
    const res = knight.move([5, 0], []);
    expect(knight.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
  it("can move over other pieces", () => {
    const knight = new Knight(true, [1, 0]);
    const res = knight.move([0, 0], []);
    expect(knight.position).toStrictEqual([1, 0]);
    expect(res).toBe(false);
  });
});
