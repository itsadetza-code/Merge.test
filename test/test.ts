import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge 3 sorted arrays into ascending order", () => {
    const col1 = [1, 3, 5];
    const col2 = [2, 4, 6];
    const col3 = [9, 7]; // descending

    const result = merge(col1, col2, col3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
  });

  it("should work with empty arrays", () => {
    const col1: number[] = [];
    const col2: number[] = [1, 2, 3];
    const col3: number[] = []; // descending but empty

    const result = merge(col1, col2, col3);

    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle all descending in col3", () => {
    const col1 = [1];
    const col2 = [2];
    const col3 = [5, 4, 3];

    const result = merge(col1, col2, col3);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
