// Your code goes in here
// Div Container
document.body.style.fontFamily = 'Montserrat', 'sans-serif';
const appDiv = document.querySelector("#app");
appDiv.style.margin ="0 auto";
appDiv.style.width = "40%";
appDiv.style.height= "auto";
appDiv.style.backgroundColor= "#F7F7F7";
appDiv.style.padding = "1rem";
appDiv.style.borderRadius = "0.7rem";

// h1 TipCalculator
const h1 = document.querySelector("h1");
h1.style.fontSize = "1.8rem";
h1.style.color = "#555555";
h1.style.borderBottom = "1px solid darkgray";
h1.style.paddingBottom="0.5rem";

// each set of input and lable is in a Div
const divFrom = document.querySelectorAll( ".divForm");
divFrom.forEach(element => {
  element.style.margin = "0.3rem";
  element.style.padding = "0.3rem";
  element.style.fontSize = "1rem";
  element.style.color = "#777777";
})

//Design for all the inputs
const formInput = document.querySelectorAll('input');
formInput.forEach(element => {
   design(element);
 })

 //design for how was your service selector 
const inputOption = document.querySelector('#servicePercent');
design(inputOption);

// design function with input and selector
function design(element){
  element.style.width = "70%";
  element.style.border = "1px solid #C1C1C1"
  element.style.borderRadius = "0.3rem";
  element.style.marginTop = "0.5rem";
  element.style.height = "1.8rem";
}

//Button
const button = document.querySelector('button');
button.style.backgroundColor= '#ED1C24';
button.style.border = "none";
button.style.borderRadius = "0.2rem"
button.style.color = "white";
button.style.width = "6rem";
button.style.height = "2.5rem";
button.style.fontSize = "1.2rem";
button.style.margin= "5% 40% 0% 40%"; /** I couldnt give margin 0 auto and bring it to the center ! what should I do? */


// select the inputs
const billAmountInput =document.getElementById('billAmount');
const servicePercentInput = document.getElementById('servicePercent');
const peopleNumberInput =document.getElementById('peopleNumber');

//Div Resault
const divResault = document.createElement('div');
divResault.style.width = "15rem";
divResault.style.margin = "0 auto";
divResault.style.marginTop = "1rem";
divResault.style.height = "8rem";
divResault.style.padding = "1rem";
divResault.style.textAlign = "center";
divResault.style.color = "#17347B"

// click on button
button.addEventListener('click', calculate);

// function calculate
function calculate(){
  if ((billAmountInput.value =="")  || (peopleNumberInput.value =="") || servicePercentInput.value == "") {
    alert('You need to fill in all the fields!');
  }
  else {
    appDiv.appendChild(divResault);
    const billAmount =parseInt(billAmountInput.value, 10) ;
    const servicePercent = (parseInt(servicePercentInput.value, 10))/100;
    const peopleNumber =parseInt(peopleNumberInput.value, 10);
    if (peopleNumberInput.value == 1 ){
      divResault.innerHTML =`TIP AMOUNT $${((billAmount * servicePercent)/peopleNumber).toFixed(2)}` ;
    } else {
      divResault.innerHTML =`TIP AMOUNT $${((billAmount * servicePercent)/peopleNumber).toFixed(2)} PER PERSON` ;
    }
  }
}