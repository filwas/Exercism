import { spiralMatrix } from './spiral-matrix';

describe('Spiral Matrix', () => {
  test('empty spiral', () => {
    const expected = [];
    const actual = spiralMatrix(0);

    expect(actual).toEqual(expected);
  });

  test('trivial spiral', () => {
    const expected = [[1]];
    const actual = spiralMatrix(1);

    expect(actual).toEqual(expected);
  });

  test('spiral of size 2', () => {
    const expected = [
      [1, 2],
      [4, 3],
    ];
    const actual = spiralMatrix(2);

    expect(actual).toEqual(expected);
  });

  test('spiral of size 3', () => {
    const expected = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    const actual = spiralMatrix(3);

    expect(actual).toEqual(expected);
  });

  test('spiral of size 4', () => {
    const expected = [
      [ 1,  2,  3,  4],
      [12, 13, 14,  5],
      [11, 16, 15,  6],
      [10,  9,  8,  7],
    ];
    const actual = spiralMatrix(4);

    expect(actual).toEqual(expected);
  });

  test('spiral of size 5', () => {
    const expected = [
      [ 1,  2,  3,  4,  5],
      [16, 17, 18, 19,  6],
      [15, 24, 25, 20,  7],
      [14, 23, 22, 21,  8],
      [13, 12, 11, 10,  9],
    ];
    const actual = spiralMatrix(5);

    expect(expected).toEqual(actual);
  });

  test('spiral of size 6', () => {
    const expected = [
      [ 1,  2,  3,  4,  5,  6],
      [20, 21, 22, 23, 24,  7],
      [19, 32, 33, 34, 25,  8],
      [18, 31, 36, 35, 26,  9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11]
    ];
    const actual = spiralMatrix(6);

    expect(expected).toEqual(actual);
  });

  test('spiral of size 7', () => {
    const expected = [
      [ 1,  2,  3,  4,  5,  6,  7],
      [24, 25, 26, 27, 28, 29,  8],
      [23, 40, 41, 42, 43, 30,  9],
      [22, 39, 48, 49, 44, 31, 10],
      [21, 38, 47, 46, 45, 32, 11],
      [20, 37, 36, 35, 34, 33, 12],
      [19, 18, 17, 16, 15, 14, 13]
    ];
    const actual = spiralMatrix(7);

    expect(expected).toEqual(actual);
  });
});
