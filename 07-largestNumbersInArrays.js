function largestOfFour(arr) {
  var largestOnes = [];
  for(var i=0; i<arr.length; i++) {
    var temp = arr[i][0];
    for(var j=0; j<arr[i].length; j++) {
      if(arr[i][j]>temp) {
        temp = arr[i][j];
      }
    }
    largestOnes.push(temp);
  }
  return largestOnes;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

*/
