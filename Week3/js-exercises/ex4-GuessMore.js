/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1; 
  return val; //10
}
f1(x);//10
console.log(x);//9

/** console.log(x) would print 9 in the console ,
 we call f1(9) then inside the function 9 + 1 = 10
 so in return f1(10), but we didnt assigned the return of function to any variable , so x is just 10 inside the function but outside the function is 9
  */

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
console.log(x);

/** console.log(y) would print {x:10}
 because y is an objest and x is property of this object, and its not a defined variable .
 */