/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/ 



 function catWalk() {
   pos +=10;
   image.style.left = pos + "px";
   if (pos >= innerWidth) {
     pos = 0;
     image.style.left = "0px";
    }0
   
   console.log(innerWidth);
   if (pos == middleWidth) {
    image.src = "tenor.gif";
    clearInterval(id);
    setTimeout(() => {
      image.src = imageRef;
      id = setInterval(catWalk, 50);
    }, 5000);
  }
}

let image = document.querySelector('img');
let pos = 0;
image.style.left = "0px";
let innerWidth = window.innerWidth - image.width;
let middleWidth = (Math.ceil((innerWidth / 2) / 10) * 10) ; // because everytime pos is +=10! 
let imageRef = image.src;
id = setInterval(catWalk, 50);







