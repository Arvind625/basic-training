// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var largest = -1000000, i;
  var sec_lar = largest;
  for(i=0;i<array.length;i++){
    if(array[i]> largest)
        largest = array[i];
  }
   for(i=0;i<array.length;i++){
    if(array[i]> sec_lar && array[i]<largest)
        sec_lar = array[i];
      
  }
  return sec_lar;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var arr = new Array(26);
    var i;
  arr.length = 26;
   for(i = 0; i<26; i++){
      arr[i] = 0;
  }
  
  for(i = 0; i<string.length; i++){
      arr[string.charAt(i)-'a'] += 1;
  }
  console.log(arr);
  return arr;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)

function flatten(unflatObject) {
  
			
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
}
