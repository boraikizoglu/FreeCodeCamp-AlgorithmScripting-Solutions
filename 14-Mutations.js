/*I tried to solve it without indexOf() method.
I know that It would be easier with indexOf() method */

function mutation(arr) {
  var checkArray = [];
  for(var i=0;i<arr[1].length;i++) {
    var count = 0;
    for(var j=0; j<arr[0].length;j++) {
        if( arr[1].charAt(i).toLowerCase() === arr[0].charAt(j).toLowerCase() ){
              count++; 
              /* Count will be zero If i. char of second element isn't same with any char of first element in the array.
              
              Count will be pushed to checkArray, then, If checkArray has a 0, function will return false.  
              */
        }
    }
    checkArray.push(count);
  }
 for(var b=0; b<checkArray.length; b++) {
   if(checkArray[b] === 0) return false;
 }
 return true;
}

mutation(["Mary", "Aarmy"]);

/*
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
*/
