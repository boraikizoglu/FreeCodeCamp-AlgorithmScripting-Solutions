function titleCase(str) {
  var strArray = str.split(' ');
  var newArray = [];
  /*
  1-Firstly, split makes all words of the sentence elements of array.
  2-All elements of array will be lowercase
  3-Makes uppercase first char of every element in the array.
  4-then .join creates a sentence with elements of array
  */
  for(var i=0; i<strArray.length; i++) {
    strArray[i] = strArray[i].toLowerCase();
    var str2 = strArray[i];
    var temp = str2.charAt(0).toUpperCase();
    temp = temp + strArray[i].substr(1, strArray[i].length);
    newArray[i] = temp;
  }
  var result = newArray.join(" ");
  return result;
}

titleCase("I'm a little tea pot");

/*
https://www.freecodecamp.org/challenges/title-case-a-sentence

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

*/
