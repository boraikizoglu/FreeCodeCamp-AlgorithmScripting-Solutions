function chunkArrayInGroups(arr, size) {
  var loopTimes = Math.floor(arr.length%size !== 0 ? arr.length/size+1 : arr.length/size);
  var returnArray = [];
  for(var i=0; i<loopTimes; i++) {
    var tempArray = [];
    for(var j=0; j<size; j++) {
      if(i*size+j<arr.length) tempArray.push(arr[i*size+j]);
    }
    returnArray.push(tempArray);
  }
  return returnArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

/*
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/
