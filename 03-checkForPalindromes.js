function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  
  var tempBool = true; //It will be always true If "if" condtions isn't true.
  
  for(i=0; i<str.length; i++) {
    if(str[i] != str[str.length-1-i]) {
      tempBool = false;
    }
  }
  return tempBool;
}

palindrome("eye");
