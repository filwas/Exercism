export function count(rectangles) {
  console.log(rectangles);

  //Step 0: check if there's anything for us to do anyway
  if (rectangles.length == 0) return 0

  //Step 1: get the positions of all corners
  var positions = getAllCorners(rectangles)
  console.log(positions);

  //Step 2: find all possible rectangles
  var possibleRectangles = getAllPossibleRectangles(positions)
  console.log(possibleRectangles);

  //Step 3: check all possible rectangles if they're a valid rectangle
  var confirmedRectangles = checkAllRectangles(rectangles, possibleRectangles)
  console.log(confirmedRectangles);

  //Step 4: the answer to the query is the amount of confirmed rectangles
  return confirmedRectangles.length;
}

function getAllCorners(rectangles) {
  let corners = [];
  //Step 1.1: with a single loop, we're able to get the [X, Y] values for all corners in the input
  var xMax = rectangles[0].length
  let rectangleString = rectangles.join("");
  for (let i = 0; i < rectangleString.length; i++) {
    if (rectangleString[i] == "+") corners.push([i % xMax, Math.floor(i / xMax)])
  }
  return corners
}

function getAllPossibleRectangles(corners) {
  let possibleRectangles = []

  corners.forEach((e, i, a) => {
    //Step 2.1: for each corner previously found, get a list of all other corners on its X and Y axis'
    //          it won't list the corner itself or corners to the left/top of it
    //          this is because of how the list of all corners itself is created: going from left to right, then from top to bottom
    let xProbables = a.slice(i + 1).filter(position => position[1] == e[1])
    let yProbables = a.slice(i + 1).filter(position => position[0] == e[0])

    //Step 2.2: for each corner on the X axis, check all corners on the Y axis
    xProbables.forEach(ex => {
      yProbables.forEach(ey => {
        let fourthCorner = [ex[0], ey[1]]
        //Step 2.3: for each pair of corners, check if the fourth corner in the probable rectangle exists
        //          if it does, we now have a possible rectangle because all four corners exist
        //          for further calculations, all we need are the top left and bottom right corners
        corners.filter(e => e[0]==fourthCorner[0] && e[1]==fourthCorner[1]).length == 0 ? null : possibleRectangles.push([e, fourthCorner])
      })
    })
  })
  return possibleRectangles
}

function checkAllRectangles(rectangles, possibleRectangles) {
  var confirmedRectangles = []

  possibleRectangles.forEach(rec => {
    //Step 3.1: get the starting position and the height & width of the rectangle 
    let xStart = rec[0][0]
    let yStart = rec[0][1]
    let xDiff = rec[1][0] - xStart
    let yDiff = rec[1][1] - yStart
    let xCheck = false;
    let yCheck = false;

    //Step 3.2: both X-parallel sides can be checked without a loop, by applying a search to both strings
    let xString = rectangles[yStart].slice(xStart, xDiff) + rectangles[yStart + yDiff].slice(xStart, xDiff)
    xCheck = xString.search(/[^+-]/g) == -1 ? true : false
    

    //Step 3.3: Y-parallel sides are not stored as a string, so we need to use a loop to check all characters one by one
    for (let y = 0; y < yDiff; y++) {
      let leftCheck = rectangles[yStart + y][xStart] == "|" ? true : rectangles[yStart + y][xStart] == "+" ? true : false
      let rightCheck = rectangles[yStart + y][xStart + xDiff] == "|" ? true : rectangles[yStart + y][xStart + xDiff] == "+" ? true : false

      if (leftCheck && rightCheck) {
        if (y + 1 == yDiff) yCheck = true;
      } else {
        break;
      }
    }

    //Step 3.4 if both checks are true, then this rectangle is confirmed
    if (xCheck && yCheck) {
      confirmedRectangles.push(rec)
    }
  })

  return confirmedRectangles
}