// your code goes in here
let quoteHolder = document.querySelector('.quoteHolder');
let newQuote = document.querySelector('.newQuote');
let emptyQuote = document.querySelector('.emptyQuote');

let newArray = ['"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
 '"The way to get started is to quit talking and begin doing." - Walt Disney', 
'"If life were predictable it would cease to be life, and be without flavor." - Eleanor Roosevelt',
'"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success." -James Cameron',
'"Life is what happens when you\'re busy making other plans." - John Lennon',
'"Spread love everywhere you go. Let no one ever come to you without leaving happier." - Mother Teresa'];



newQuote.addEventListener('click', function(){
  let randomNum = Math.floor(Math.random() * 6) ;
  quoteHolder.innerText = newArray[randomNum];
});

emptyQuote.addEventListener('click', function(){
  quoteHolder.innerHTML = " ";
})



