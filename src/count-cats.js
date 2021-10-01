import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  throw new NotImplementedError('Not implemented');
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let a = 0; a < matrix[i].length; a++) {

      if (matrix[i][a] == '^^') {
        result++;
      }
    }
  }
  return result;
}