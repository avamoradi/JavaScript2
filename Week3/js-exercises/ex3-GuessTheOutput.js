/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/
// 


let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/* resault of this code is an alert message which shows 12
the a is global variable and let which means that could be overwrite . 
at the first a = 10, when we call function x(), a = 12 , then we have a closure  , the inner function could be access the outer function variables so here is also a = 12 , and by line alert(a), we going to alert(12)
*/ 