
function findLongestWord(str) {
  var tempSentence = str;
  var prevWord = "";
  var longestWord = "";
  
  while(tempSentence.length > 0) {

    prevWord = tempSentence.substr(0,tempSentence.search(" "));
    
    if(tempSentence.search(" ") != -1) //To check whether it is the last word
    {
        tempSentence = ( tempSentence.substr(tempSentence.search(" ")+1,tempSentence.length - prevWord.length-1));
    
        if(prevWord.length > longestWord.length) {
        longestWord = prevWord;
        }
    
    }
    
    else  {
      //It will also compare last word with other words
      if(tempSentence.length > longestWord.length) {
          longestWord = tempSentence; }
      tempSentence = "";
    }
  }
  
  return longestWord.length;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
