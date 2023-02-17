var sound;
var song;

let ch = ["🍩","🍦","🍟","🍭","🍮","🍰","🍵","🍳"];
let x = [];
let y = [];
let angleRotate = 0.0;
let angles = [-0.25,0.25];
let c = "#4deeea";
let s = 0;

//preload sound effects
function preload(){
    sound = loadSound('catch.mp3');
    song = loadSound('candy_crush_bg.mp3');
}

function setup() {
  song.loop(); //play background sound
  
  createCanvas(600,600);
  textAlign(CENTER,CENTER); //center vertically and horizontally
  rectMode(CENTER);      
      for (let i =0; i <8; i++){
        for (let j = 0; j < 8; j++){
          y[j] = height/2+random(height+80);
    }
  }
}


function draw() {
    background(0);
  
    //create score board
    fill("#4deeea");
    textSize(30);
    text("Score: " + s,100,50);
  
    //create tray
    let xc = constrain(mouseX, 0, width);
    fill(c);
    rect(xc,500,60,10,20,20);

    //create floating snack
     for(let i = 0; i <8; i++){
    textSize(40);
       push();
    translate(x[i],y[i]);
    rotate(radians(angleRotate));
       push();
    translate(-x[i],-y[i]);
    text(ch[i],x[i],y[i]);
    let originalLoc = ch[i];
    angleRotate += random(angles);
    pop(); 
    pop();
     
    //if tray catches snack
    if((xc+20) > x[i] && xc < (x[i]+40) && (y[i]+40) > 500 && y[i] <(510)){
      y[i] = 0;
      s += 1;
      c = "#f000ff";
      sound.play();
    }
    
    //if tray does not catch snack
    else if(y[i] > height+20){
       y[i] = 0;
       x[i] = random(width+80);
       c = "#4deeea";
    }
    
    y[i] += 2;
}
}