function countLetters(string){
  var summaryCount = {};
  string = string.replace(/\s/g, '').toLowerCase();

  for(var char in string){
    var letter = string[char];

    if(summaryCount[letter]) summaryCount[letter] += 1;
    else summaryCount[letter] = 1;
  }
  return summaryCount;
}

console.log(countLetters("hey yoyuu asda"));