function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function rot13(str) { // LBH QVQ VG!
  var temp = "";
  for(i=0; i<str.length; i++) {
  var myChar = str[i];
  var asciOfString = myChar.charCodeAt();
  var upperCaseA = 'A';
  var asciOfA = upperCaseA.charCodeAt();
  if(asciOfString-asciOfA+13 >= 26) {
    temp += String.fromCharCode(asciOfString+13-26);
  }
  else {
    temp += String.fromCharCode(asciOfString+13);
  }
  }
  //to delete -'s
  var newchar = ' '
  temp = temp.split('-').join(newchar);
  if(!isLetter(str.charAt(str.length-1))) {
  temp = temp.substr(0, temp.length-1);
  temp += str.charAt(str.length - 1);
  }
  str = temp;
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
