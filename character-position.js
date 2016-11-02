var positionLetters = function(str) {
  var characters = str.split(' ').join('').split('');
  var positionOfChars = {};

  for (var i = 0; i < characters.length; i++) {
    if (!positionOfChars.hasOwnProperty(characters[i])) {
      positionOfChars[characters[i]] = [i];
    } else {
      positionOfChars[characters[i]].push(i);
    }
  }
  console.log(positionOfChars);
}

var userInput = process.argv.slice(2);
positionLetters(userInput[0]);

console.log("Changed");
