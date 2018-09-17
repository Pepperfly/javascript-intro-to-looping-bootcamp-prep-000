console.log(array);
function forLoop(array) {
  //adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times
  
  for (let i=0; i<25; i++) {
    if (i-1 === 0) {
    	array.push("I am " + i + " strange loop.");
    } else {
    	array.push("I am " + i + " strange loops.");
    }
  }
  return array;
}


function whileLoop(n) {
//         counts down from n to 0:
  while (n > 0) {
    n--;
  }
  return "done";
}


function doWhileLoop(array) {
//        removes elements from `array` until `array` is empty or until `incrementVariable()` returns `false`:
  do {
    delete array[i];
    incrementVariable();
  } while (array.length > 0 && incrementVariable());
}


var i = 0;
 
function incrementVariable() {
  i++;
}
 
