function bouncer(arr) {
  
  var newArr = arr.filter(function(var1) {
    return var1;
  });
  
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

/*
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/
