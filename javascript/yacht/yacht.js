//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { log } from "console";

export const score = (dice, category) => {
  switch (category) {
    case 'ones': return ones(dice);
    case 'twos': return twos(dice);
    case 'threes': return threes(dice);
    case 'fours': return fours(dice);
    case 'fives': return fives(dice);
    case 'sixes': return sixes(dice);
    case 'yacht': return yacht(dice);
    case 'full house': return fullHouse(dice);
    case 'four of a kind': return fourOfAKind(dice);
    case 'little straight': return littleStraight(dice);
    case 'big straight': return bigStraight(dice);
    default: return dice.reduce((acc, curr) => acc + curr, 0);
  }
};

const ones = (dice) => dice.reduce((acc, curr) => curr == 1 ? acc += curr : acc, 0);
const twos = (dice) => dice.reduce((acc, curr) => curr == 2 ? acc += curr : acc, 0);
const threes = (dice) => dice.reduce((acc, curr) => curr == 3 ? acc += curr : acc, 0);
const fours = (dice) => dice.reduce((acc, curr) => curr == 4 ? acc += curr : acc, 0);
const fives = (dice) => dice.reduce((acc, curr) => curr == 5 ? acc += curr : acc, 0);
const sixes = (dice) => dice.reduce((acc, curr) => curr == 6 ? acc += curr : acc, 0);
const yacht = (dice) => dice.every((curr) => curr == dice[0]) ? 50 : 0;
const fullHouse = (dice) => {
  let uniques = uniqueNum(dice)[0];
  let firstUniques = uniqueNum(dice)[1];
  if (uniques == 2 && firstUniques > 1 && firstUniques < 4) {
    return dice.reduce((acc, curr) => acc + curr, 0)
  } else return 0;
}
const fourOfAKind = (dice) => {
  let uniques = uniqueNum(dice)[0];
  let firstUniques = uniqueNum(dice)[1];
  if (uniques == 2 && firstUniques == 1) return dice[1]*4;
  else if (firstUniques >= 4) return dice[0]*4;
  else return 0;

}
const littleStraight = (dice) => {
  let counter = 0
  for (let i = 1; i <= 5; i++) {
    if (dice.includes(i)) counter++;
  }
  return counter == 5 ? 30 : 0;
}
const bigStraight = (dice) => {
  let counter = 0
  for (let i = 2; i <= 6; i++) {
    if (dice.includes(i)) counter++;
  }
  return counter == 5 ? 30 : 0;
}


const uniqueNum = (dice) => {
  let uniques = [];
  let firstUniqueCount = 1;
  for (let i = 0; i < dice.length; i++) {
    if (!uniques.includes(dice[i])) {
      uniques.push(dice[i]);    
    } else if (dice[i] == dice[0]) {
      firstUniqueCount++;
    }
  }
  return [uniques.length, firstUniqueCount];  
}


