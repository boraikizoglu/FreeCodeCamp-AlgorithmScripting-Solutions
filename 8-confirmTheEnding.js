function confirmEnding(str, target) {
  var newArray = str.split();
  for(var i=0; i<newArray.length; i++) {
    var temp = newArray[i];
    if(temp.substr(str.length-target.length, target.length) === target) {
      return true;
    }
  }
  return false;
}

confirmEnding("Bastian", "n");

/*
confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.
*/