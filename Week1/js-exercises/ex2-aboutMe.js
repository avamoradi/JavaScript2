/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
 document.body.style.fontFamily = "Arial, sans-serif";

 document.getElementById('nickname').innerText = "Ava";
 document.getElementById('fav-food').innerText = "Salad";
 document.getElementById('hometown').innerText = "Shiraz";

 let listItem = document.getElementsByTagName('li');
 for (let i in listItem ){
   listItem[i].className = "list-item";
 }
  
 const style = document.createElement('style');
 style.innerText = ".list-item {color : red;}";
 document.head.appendChild(style);

 const myImage = document.createElement('img');
 myImage.src = "./myImage.jpg";
 myImage.style.width = '50vh';
 document.body.appendChild(myImage);


