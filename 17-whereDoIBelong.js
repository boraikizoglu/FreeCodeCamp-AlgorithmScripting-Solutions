function getIndexToIns(arr, num) {
  var temp =0;
  for(var i = 0; i<arr.length;i++) {
    if(arr[i]<num) temp++;
  }
  return temp;
}

getIndexToIns([5, 3, 20, 5], 5);


/*
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.
*/
