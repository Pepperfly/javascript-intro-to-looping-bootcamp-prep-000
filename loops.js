function forLoop(array) {
  for (let i=0; i<25; i++) {
    if (i-1 === 0) {
    	array.push("I am " + i + " strange loop.");
    } else {
    	array.push("I am " + i + " strange loops.");
    }
  }
  return array;
}

var n = 83;
function whileLoop(n) {
  while (n > 0) {
    n--;
  }
  return 'done';
}


function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0);
	return array;
}

