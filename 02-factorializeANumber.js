function factorialize(num) {
  var temp = 1;
  for(i=0; i<num; i++) {
    temp *= num-i;
  }
  num = temp;
  return num;
}

factorialize(5);
