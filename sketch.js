var inp, speechRec;
var line = 10;
voice = new p5.Speech();
voice.setPitch(2);
voice.setRate(0.5);

function preload(){
  img1=loadImage("1.png");
  img2=loadImage("2.png");
}

function setup() {
  createCanvas(500,300);

   robot = createSprite(width/2,200);
  robot.addImage(img1);
  robot.scale=0.75
  //for text to speech
  button1=createButton("speak");
  button1.mousePressed(run);
  button1.position(windowWidth/2+50,height-50);
  area=createInput();
  area.input(ready);
  area.position(button1.x-200,button1.y);

  //for speech to text
  let lang = navigator.language || "en-US";
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continous = false;
  let intrim = false;
 // speechRec.start(continous, intrim);
 function hear(){
  speechRec.start();
  robot.addImage(img1)
}
  button2= createButton("listen");
  button2.mousePressed(hear);
  button2.position(button1.x+50,button1.y)

 function gotSpeech(){
  console.log(speechRec);
  if(speechRec.resultValue==true){
    switch (speechRec.resultString) {
      case "hello": intro()

        break;
      
      case "hi":intro();
        break; 
      case "WhatsApp":voice.speak("i am fine what's about you ");
        break   ;
      case "how are you":voice.speak("i am fine what's about you ");
        break   ;
        case "you are awesome":voice.speak("thank u but, not more than u ");
        break   ;
        case "Akshat":voice.speak("a genius and my daddy ");
        break   ;
        case "Tanya":voice.speak(" padhai karle beta ");
        break   ;
        case "Soumya":voice.speak("white hat junior ");
        break   ;
        case "what should I call you":voice.speak("you can call me tonight ");
        break   ;
        case "Anushka":voice.speak("bhaalu aagya bhaagoo ");
        break   ;
        case "Anwesha":voice.speak("didi ji ");
        break   ;
        case "Aditya Soni":voice.speak("lawra");
        break   ;
        case "Aditya Nema":voice.speak("bharva ");
        break   ;
        case "Vedant":voice.speak("jija ji ");
        break   ;
        case "I love you":voice.speak("Congratulations aapka cut chuka hai. HaHaHaha ");
        break   ;
        case "f*** you":voice.speak("okay, when? ");
        break   ;
      default:  sry();
        break;
    }
    text(speechRec.resultString,100,100);
    console.log(speechRec.resultString);
    createP(speechRec.resultString)
  }
 }
}

function draw() {
  background("skyBlue");

  drawSprites(); 
}

function ready(){
  inp = this.value();
}

function run(){
  console.log(inp);
  voice.speak(inp);
  textSize(28);
  createP(inp,0,line);
  line+=100;
  robot.addImage(img2);
}

function intro(){
  voice.speak("hello i m angel priya. one of the program designed by akshat");
}
function sry(){
  voice.speak("Sorry! i didnt get that");
}
