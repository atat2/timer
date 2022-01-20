let totalMs;
let timeAmount, timeDisplay;
let timeDifferent;
let trackTime;
let startTime, buttonMsg;
let ms, s, m, h;
let dis1, dis2, dis3;

function setup() {
  createCanvas(400, 400);
  totalMs = millis();
  timeAmount = 0;
  timeDiff = 0;
  s = 0;
  m = 0;
  h = 0;
  dis1 = 0;
  dis2 = 0;
  dis3 = 0;
  timeDisplay = h + ":" + m + ":" + s;
  trackTime = false;
  buttonMsg = "Start/End Time";
  startTime = createButton(buttonMsg);
  startTime.position(width/2-50,height/2);
  startTime.mousePressed(timer);
}

function draw() {
  //visuals
  background(220);
  rect(width/2-125,height/2-50,250,75, 10);
  
  totalMs = millis();
  
  //Display Time
  //text(ms/1000, width/2, height/2); //debug line
  text(timeDisplay, width/2-30, height/2-10);
  
  //Calculates timer's time
  if(trackTime) {
    timeAmount = totalMs - timeDiff;
  } else {
    timeDiff = totalMs - timeAmount;
  }

  //Converts total time into hr:min:s format
  s = timeAmount/1000;
  timeDisplay = timeConvert();
}

function timer() {
  trackTime = !trackTime;
}

function timeConvert() {

  //Calculates hr, min, s
  s = timeAmount/1000 % 60;
  m = timeAmount/1000/60 % 60;
  h = timeAmount/1000/60/60;

  //Always shows min as a 2 digit number
  let extraZero = "0";
  if(m < 10) {
    extraZero = "0";
  } else {
    extraZero = "";
  }
  
  //Rounds down to show unnesseary decimals
  dis1 = floor(s);
  dis2 = floor(m);
  dis3 = floor(h);
  
  //Updates display
  let display = dis3 + ":" + extraZero + dis2 + ":" + dis1 + "."+ timeAmount % 1000;

  return display;
}