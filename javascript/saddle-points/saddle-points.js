//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (input) => {
  //0. define our variables
  var totalRows = input.length;
  var potentialSaddlePoints = [];
  var confirmedSaddlePoints = []

  //1. get a list of all potential saddle points
  //     a potential saddle point contains the value (biggest for it's row), the number of the row itself,
  //     and a list of all columns in which this value appears
  input.forEach((row, rowNum) => {
    let biggest = [...row].sort((a, b) => b - a)[0]
    if (biggest == undefined) return;
    let biggestIndexes = row.flatMap((number, column) =>  number == biggest ?  column : []);
    potentialSaddlePoints.push([biggest, rowNum, biggestIndexes])
  });

  if (potentialSaddlePoints.length == 0) return []

  //2. check each potential saddle point
  //    each point can have multiple potential columns - we need to check them all
  potentialSaddlePoints.forEach(point => {
    let value = point[0]
    let rowNum = point[1]
    let potentialColumns = point[2]
    potentialColumns.forEach((potCol, i) =>{
      let isLowest = true
      //here starts the actual check if the value is a true saddle point
      for (let checkRow = 0; checkRow < totalRows; checkRow++) {
        if (checkRow == rowNum) continue;
        if (input[checkRow][potCol] >= value) continue;
        isLowest = false;
      }
      if (isLowest) confirmedSaddlePoints.push({row: rowNum+1, column: potCol+1})
    })
  })
  
  return confirmedSaddlePoints;
};
