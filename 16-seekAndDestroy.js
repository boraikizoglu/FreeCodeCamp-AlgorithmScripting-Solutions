function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var newArray = [];
      for(var j=0; j<args[0].length; j++) {
        var count=0;
        for(var i=1; i<args.length; i++) {
          if(args[0][j] === args[i]) {
            count++;
          }
        }
        if(count === 0) newArray.push(args[0][j]);
    }
    
  return newArray;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);


/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/
