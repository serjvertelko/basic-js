import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  throw new NotImplementedError('Not implemented');
  let result = [];

  members.forEach(item => {
    if (typeof item === "string") {
      result.push((item[0]).toUpperCase());
    }
  });
  result.sort();
  return result.join("");
}