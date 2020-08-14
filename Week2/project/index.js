/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

  document.body.style.backgroundColor = "#1F555C";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";

  const divApp = document.querySelector('#app');
  document.body.appendChild(divApp);
  divApp.style.textAlign = "center";
  divApp.style.color = "white";
  divApp.style.fontFamily = 'Roboto', 'sans-serif';
  divApp.style.width = "70%";

  // Row 1 Pomodo Clock
  const pomodoroC = document.createElement('h1');
  pomodoroC.innerText = "Pomodoro Clock";
  divApp.appendChild(pomodoroC);
  pomodoroC.style.fontSize = "2.5rem";

  // Row 2 Session Length
  const sessionL = document.createElement('h2');
  sessionL.innerText = "Session Length";
  divApp.appendChild(sessionL);
  pomodoroC.style.fontSize = "2rem";

  // Row 3 up and down Arrows and user selected number
  const setTime = document.createElement('div');
  setTime.style.display = "flex";
  setTime.style.justifyContent = "space-around";
  setTime.style.width = "30%";
  setTime.style.fontSize= "1.2rem"
  divApp.appendChild(setTime);
  setTime.style.margin = '0 auto';

  const arrowUp = document.createElement('img');
  arrowUp.style.width = "40%";
  arrowUp.style.height = "50%";
  const setNumber = document.createElement('div');
  setNumber.style.margin = "1rem"
  setNumber.style.width = "40%";
  setNumber.style.height = "50%";
  const arrowDown = document.createElement('img');
  arrowDown.style.width = "40%";
  arrowDown.style.height = "50%";
  setTime.appendChild(arrowUp);
  setTime.appendChild(setNumber);
  setTime.appendChild(arrowDown);
  arrowUp.src = "arrowup.png";
  arrowDown.src = "arrowdown.png";
  setNumber.textContent = "0";


  // Row 4 the rectangle in the middle 
  const showTime = document.createElement('div');
  showTime.style.margin = '0 auto';
  showTime.style.border = "4px solid #14363A";
  showTime.style.borderRadius = "1rem";
  showTime.style.padding = "1rem";
  divApp.appendChild(showTime);
  showTime.style.width = "30%";
  const session = document.createElement('h3');
  session.innerText = "Session";
  showTime.appendChild(session);
  const timeInFormat = document.createElement('div');
  showTime.appendChild(timeInFormat);
  timeInFormat.innerText = "00:00";
  timeInFormat.style.fontSize = "1.2rem"

  //Row 5 Play Pause button
  const playPause = document.createElement('div');
  divApp.appendChild(playPause);
  playPause.style.display = "flex";
  playPause.style.justifyContent = "center";
  const playButton = document.createElement('img');
  playButton.src = "play.png";
  const pauseButton = document.createElement('img')
  pauseButton.src = "pause.png";
  playPause.appendChild(playButton);
  playPause.appendChild(pauseButton);

  let running = true;
  let counter = 0;

  //Arrow up
  let variableSetNumber;
  arrowUp.addEventListener('click', () => {
   if (running == true ) {
    counter += 1;
    setNumber.innerText = counter;
    variableSetNumber = setNumber.innerText;
    changeSetNumber(variableSetNumber);
   }
  });

  //Arrow Down
  arrowDown.addEventListener('click', () => {
    if (counter > 0 && running === true) {
    counter -= 1;
    setNumber.innerText = counter;
    variableSetNumber = setNumber.innerText;
    changeSetNumber (variableSetNumber);
    }   
  });

  //Timer
  let elapsed;
  function changeSetNumber (x) { 
    elapsed = (parseInt(x, 10)) * 60;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timeInFormat.textContent = `${minutes}:${seconds}`;
  }

  // setInterval 1 second 
  let intervalId = null;
  function start () {
    intervalId = setInterval(countDown, 1000);
  };
    

  // decrease one second from time until the end
  function countDown(){
    if (elapsed > 0 ) {
      elapsed -= 1;
      let seconds = Math.floor(elapsed % 60);
      let minutes = Math.floor(elapsed / 60);
      timeInFormat.textContent = `${minutes}:${seconds}`;
      running = false;
    } else {
      timeInFormat.textContent = 'Time\'s up';
      clearInterval(intervalId);
      running = true;
      setNumber.innerText = "0";
    }
  }

  //clear Interval
  function stopIt() {
    clearInterval(intervalId);
  }

  // click on play and pause
  playButton.addEventListener('click', start);
  pauseButton.addEventListener('click', stopIt);


    
