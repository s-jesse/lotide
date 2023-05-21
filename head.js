const head = function(arr1){
  //console.log(arr1); to test if funciton is working 
  let arr = arr1[0];
  //console.log(arr); to test if arr is working
  return arr;
}
//head([1, 2, 3]);

// assertEqual(head([]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
/*
Rules
[x] Create function head 
[x] should RETURN first item in an array
[x] should not RETURN the first element as an array - simply return element itself
[x] use assertEqual function to write test cases
head Input
[x] head function with parameter that will take in arrays
[x] within function create var that will take in index of array parameter
[x] use head function assertEqual to test
head function Output 
[x] outputs index[0] of array
[x] an array with one element stil should yield one element as its head
[x] an empty array should yield undefined as its head

Process

Test - put below head function
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/
module.exports = head;
