function slasher(arr, howMany) {
  if(howMany > arr.length) {
    return [];
  }
  else {
    var returnArray = [];
    var times =0;
    for(var i=howMany; i<arr.length; i++) {
      returnArray.push(arr[howMany+times]);
      times++;
    }
    return returnArray;
  }
}

slasher([1, 2, 3], 2);

/*
slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].
*/
