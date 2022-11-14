
//okay so in this exercise, i managed to solve it basically using maths only
//after tinkering with several possible solutions like recursion and transposition, i noticed several things:
//
//1. there are only four increment directions - up, down, left and right.
//
//2. by asking the two questions "i>j" and "i+j>n" i was able to divide the square matrix into quarters, in which every "cell" has the same increment direction
//
//3. each corner (a place on one of the diagonals, where there is a change in increment direction) can be described by a simple equation, with n being the size of the spiral:
//    first corner (top left) is just 1; second corner (top right) is n; next one is n+n-1, then n+2(n-1), then n+2(n-1)+n-2
//    basically it just grows either by what it grew previously, or by one less than it grew previously. a corner somewhere inside of a big spiral would look like this: 
//    n + 2(n-1) + 2(n-2) + 2(n-3) + 2(n-4) + 2(n-5) + 2(n-6) + 2(n-7) + 2(n-8) + 2(n-9) + 2(n-10).....
//    
//4. by looking at how the equation behaves for the different quarters from step 2, i ended up with 4 distinct equations - one for each corner
//
//5. for help with figuring out the equations i used The On-Line Encyclopedia of Integer Sequences


export const spiralMatrix = (n) => {
  var fullArray = []
  for (let i = 0; i < n; i++) {
    if (fullArray[i] == undefined) fullArray[i] = []
    for (let j = 0; j < n; j++) {
      if (i<=j && i+j < n) {
        fullArray[i][j] = (4*i*n)-(4*i**2)+(j-i+1)
      } else if (i<=j && i+j >= n) {
        fullArray[i][j] = i-4*j**2+4*j*n-5*j+2*n-1
      }else if (i>j && i+j+1 >= n) {
        fullArray[i][j] = 4*i*n-4*i**2+2*n-3*i-1-j
      } else {
        fullArray[i][j] = (j+1)*4*(n-(j+1))-i+(j+1)
      }
    }
  }

  

  return fullArray
};
