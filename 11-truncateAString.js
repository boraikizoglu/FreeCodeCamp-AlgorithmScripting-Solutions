function truncateString(str, num) {
 
 if(num>=str.length)
   return str.substr(0, num);
 else if(num<=3) {
   return str.substr(0, num) + "...";
 }
 else if(num<=str.length)
 return str.substr(0, num-3) + "...";
  
}

truncateString("Absolutely Longer", 2);


