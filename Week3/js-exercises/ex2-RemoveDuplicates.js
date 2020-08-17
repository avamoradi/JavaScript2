/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr) {
    arr.forEach(element => {
    check(element)
  });
  function check(x) {
    let counter = 0 ;
    for (let i = 0; i<arr.length; i++){
      if (x === arr[i]) {
         counter ++;
        if (counter > 1 ) {
          arr.splice(i, 1);
        }
      }
    }
  }
  return arr
}


 const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

 const newArray = removeDuplicates(letters);

 if (JSON.stringify(newArray)  === JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f'])) 

 console.log("Hooray!")
 

