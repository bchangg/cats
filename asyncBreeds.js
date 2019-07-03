// // asyncBreeds.js
// const fs = require('fs');
//
// const breedDetailsFromFile = function(breed, callback) {
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     // ISSUE: Returning from inner callback function, not our main function.
//     if (!error) {
//       callback(data);
//     }
//   });
// }
//
// // we try to get the return value
// breedDetailsFromFile('Bombay', (bombay) => {
//   console.log(bombay) // => will NOT print out details, instead we will see undefined!
//   // return bombay;
// });
//
// module.exports = breedDetailsFromFile;

const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) { 
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE 1: Pass data back via callback instead of return.
    console.log('Callback: I have the data!')
    if (!error) {
      callback(data);
    } else {
      callback(undefined);
    }
  });
}

// CHANGE 2: Value now comes back via callback, not return value
// breedDetailsFromFile('Bombay', (bombay) => {
//   console.log('Return Value: ', bombay) // => print out details correctly.
// });

module.exports = breedDetailsFromFile;