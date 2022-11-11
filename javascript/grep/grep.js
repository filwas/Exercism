#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const pathToFile = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(pathToFile.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv;
//
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// This file should *not* export a function. Use ARGS to determine what to grep
// and use console.log(output) to write to the standard output.

//Firstly, we take care of the arguments.
var flags = []
var files = []
var pattern
for (const argument of ARGS) {
  if (argument.startsWith('C:')) { //Getting rid of first two lines of ARGS
    continue;
  } else if (argument.startsWith('-')) { //Populating flags array
    flags.push(argument);
  } else if (argument.startsWith('data')) { //Populating files array
    files.push(argument);
  } else { //Establishing the search pattern
    pattern = argument;
  }
}


//Secondly, let's take care of search logic
var retArr = []
var fileTexts = new Map()
var isMultipleFiles = files.length > 1 //Variables starting with "is" are set as booleans, 
var isLineNumber = flags.includes("-n") //and they answer the question about the search included in their name.
var isPrintFile = flags.includes("-l") 
var isIgnoreCase = flags.includes("-i")
var isReverse = flags.includes("-v")
var isFullLine = flags.includes("-x")

files.forEach(e => fileTexts.set(e, readLines(e))) //This line creates a map, in which each file location has a corresponding file text.

//Thirdly: Now, the search itself starts.
fileTexts.forEach((v, k) => { //We go through the file texts one by one.
  let textLen = v.length
  for (let i = 0; i < textLen; i++) { //Each file text needs to be searched line by line.
    let line = v[i]    
    let searchLine = line; //We need to distinguish between the string where we'll be conducting the search, and the string to be actually printed out.
    let searchPattern = pattern;

    //The search has three phases:
    //    1. Preparing the string where we're conductig the search and the string that we'll be potentially printing out.
    //    2. Answering the search question given the flags provided.
    //    3. Providing the appropriate return to the above question.

    //1. The Preparation:
    if (isIgnoreCase) {
      //If we're to ignore cases, we're just gonna compare the strings in all lower cases.
      searchLine = searchLine.toLowerCase();
      searchPattern = searchPattern.toLowerCase();
    }

    if (isLineNumber) {
      //If we're to add line number, we do it here; before we add file name to the printout.
      line = (i+1)+":"+line;
    }

    if (isMultipleFiles) {
      //We're adding the filename to the printout if we're searching in more than one file.
      line = k+":"+line
    }

    //2. The Search:
    //Based on the "-x" flag, the line below conducts the appropriate search: either line must be equal to, or just include, the pattern.
    let found = isFullLine ? searchLine == searchPattern : searchLine.includes(searchPattern);
    found = isReverse ? !found : found; //To apply the reverse flag, all we have to do is reverse the boolean search result.

    //3. The Return: 
    if (found && isPrintFile){ //If the flag "-l" is applied, we need to stop all further searches in the given file and return it's location.
      console.log(k);
      return //This return applies to the fileTexts.forEach(...) callback, causing it to jump to the next file.
    } else if (found) {
      retArr.push(line) // This is a happy result.
    }
  }
})
//Finally, we print out our solution. 
console.log(retArr.join('\n'));
//In case of the "-l" flag, retArr will be empty, and the appropriate answer already printed out.
//Fortunately, printing out an empty string doesn't actually print out anything, and this kind of .join() on an empty array produces an empty string.