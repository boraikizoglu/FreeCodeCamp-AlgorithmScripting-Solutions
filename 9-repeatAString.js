
function repeatStringNumTimes(str, num) {
  if(num<0) {
    return "";
  }
  else {
    var newString = "";
    for(var i=0; i<num;i++) {
      newString += str;
    }
    return newString;
  }
}

repeatStringNumTimes("abc", 3);

/*
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/
