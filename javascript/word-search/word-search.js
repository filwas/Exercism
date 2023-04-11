//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(grid) {
    this._grid = grid

  }

  get grid(){
    return this._grid;
  }


  find(words) {
    let retObj = {}
    words.forEach(word => {
      let coords = this.getAllIndex(word)
      console.log(word, coords);


    });


  }

  horizontal(word, coords){
    coords.forEach(crd => {
      let wordArr = word.split("")
      let wordLen = word.length;
      let x = coords[0];
      let y = coords[1];
      let wordScore = 0;
      for (let i = 0; i < wordLen; i++) {
        
        
      }

    });
  }

  vertical(){
    
  }

  getAllIndex(word){
    let grid = this.grid;
    let gridWid = grid[0].length
    let gridLen = grid.length;
    let gridString = grid.join("");
    let retArr = [];
    for (let i = 0; i < gridString.length; i++) {
      if (gridString[i] == word[0]) {
        let wordLen = word.length;
        let lastChar = word[wordLen-1]
        let x = Math.floor(i/gridWid) // x = vertical, plus goes down
        let y = i%gridWid             // y = horizontal, plus goes right
        switch (true) {
          case  gridWid >= y+wordLen-1 && grid[x][y+wordLen-1] == lastChar: 
            retArr.push([x, y, "hori+"])
            break;
          case y-wordLen-1 >= 0 && grid[x][y-wordLen-1] == lastChar: 
            retArr.push([x, y, "hori-"])            
            break;
          case gridLen >= x+wordLen && grid[x+wordLen-1][y] == lastChar: 
            retArr.push([x, y, "verti+"])   
            break;
          case x-wordLen-1 >= 0 && grid[x-wordLen-1][y] == lastChar: 
            retArr.push([x, y, "verti-"])   
            break;
          case x-wordLen-1 >= 0 && gridWid >= y+wordLen-1 && grid[x-wordLen-1][y+wordLen-1] == lastChar: 
            retArr.push([x, y, "diag45+"])  
            break;
          case gridLen >= x+wordLen && y-wordLen-1 >= 0 && grid[x+wordLen-1][y-wordLen-1] == lastChar: 
            retArr.push([x, y, "diag45-"])
            break;
          case gridLen >= x+wordLen && gridWid >= y+wordLen-1 && grid[x+wordLen-1][y+wordLen-1] == lastChar: 
            retArr.push([x, y, "diag135+"])
            break;
          case x-wordLen-1 >= 0 && y-wordLen-1 >= 0 && grid[x-wordLen-1][y-wordLen-1] == lastChar: 
            retArr.push([x, y, "diag135-"])
            break;
          default:
            break;
        }
      }
    }
    return retArr;
  }

  

}

export default WordSearch;
