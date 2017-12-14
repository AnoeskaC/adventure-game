var image = document.getElementById("image");
var title = document.getElementById("title");
var tekst = document.getElementById("tekst");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var option5 = document.getElementById("option5");
var option6 = document.getElementById("option6");
var option7 = document.getElementById("option7");
var gotkeys = false;


function Startgame() {
  image.src = "foto/woonkamer.jpg"
  title.innerHTML = "Living Room"
  tekst.innerHTML = "So you want to by a musician."
  option1.innerHTML = "Go to the music shop";
  option1.setAttribute("onclick", "musicshop()");
  option2.innerHTML = "Go to the corridor";
  option2.setAttribute("onclick", "corridor()");
  option3.innerHTML = "To the car";
  option3.setAttribute("onclick", "(gotkeys)? car(): gameover()");
  option4.innerHTML = "To the bedroom";
  option4.setAttribute("onclick", "bedroom()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function livingroom() {
  image.src = "foto/woonkamer.jpg"
  title.innerHTML = "Living Room"
  tekst.innerHTML = "So you want to by a musician."
  option1.innerHTML = "Go to the music shop";
  option1.setAttribute("onclick", "musicshop()");
  option2.innerHTML = "Go to the corridor";
  option2.setAttribute("onclick", "corridor()");
  option4.innerHTML = "To the bedroom";
  option4.setAttribute("onclick", "bedroom()");
  option3.innerHTML = "To the car";
  option3.setAttribute("onclick", "(gotkeys)? car(): gameover()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
  }

function car() {
  image.src = "foto/auto.jpg"
  title.innerHTML = "Car"
  tekst.innerHTML = ""
  option1.innerHTML = "Go to the music shop";
  option1.setAttribute("onclick", "musicshop()");
  option2.innerHTML = "Go to the supermarket";
  option2.setAttribute("onclick", "gameover()");
  option3.innerHTML = "Go to the corridor";
  option3.setAttribute("onclick", "corridor()");
  option4.innerHTML = "Go to home";
  option4.setAttribute("onclick", "home()");
  option5.innerHTML = "Go to the singing school";
  option5.setAttribute("onclick", "singingschool()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "block";
  option6.style.display = "none";
  option7.style.display = "none";
}

function bedroom() {
  image.src = "foto/slaapkamer.jpg"
  title.innerHTML = "Bed room"
  tekst.innerHTML = "You can play only a instrument, but you can get more money if you also can sing on the music you're playing."
  option1.innerHTML = "Get your laptop and look for a singingschool";
  option1.setAttribute("onclick", "computer()");
  option2.innerHTML = "Go to the living room";
  option2.setAttribute("onclick", "livingroom()");
  option3.innerHTML = "Go to home";
  option3.setAttribute("onclick", "home()");
  option4.innerHTML = "Go to the car";
  option4.setAttribute("onclick", "(gotkeys)? car(): gameover()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function musicshop() {
  image.src = "foto/muziekwinkel.jpg"
  title.innerHTML = "Music Shop"
  tekst.innerHTML = "You can't play with out a instrument. Buy a instrument so you can play alone."
  option1.innerHTML = "Buy a harmonica";
  option1.setAttribute("onclick", "gameover()");
  option2.innerHTML = "Buy a gitaar";
  option2.setAttribute("onclick", "gitaar()");
  option3.innerHTML = "Buy a drumstel";
  option3.setAttribute("onclick", "gameover()");
  option4.innerHTML = "Buy keyboard";
  option4.setAttribute("onclick", "keyboard()");
  option5.innerHTML = "Go to the car";
  option5.setAttribute("onclick", "car()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "block";
  option6.style.display = "none";
  option7.style.display = "none";
}

function gameover() {
  image.src = "foto/gameover.jpg"
  title.innerHTML = "Game over!"
  tekst.innerHTML = ""
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";
  option4.style.display = "none";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function corridor() {
  image.src = "foto/gang.png"
  title.innerHTML = "Corridor"
  tekst.innerHTML = "Ready to go."
  option2.innerHTML = "Hook hang your keys";
  option2.setAttribute("onclick", "sleutels()");
  option3.innerHTML = "Go to the music shop";
  option3.setAttribute("onclick", "musicshop()");
  option4.innerHTML = "Go to the living room";
  option4.setAttribute("onclick", "livingroom()");
  option1.innerHTML = "Go to the car";
  option1.setAttribute("onclick", "(gotkeys)? car(): gameover()");
  sleutels.setAttribute("onclick", "getkeys()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function getkeys() {
  gotkeys = true;
  sleutels.style.display = "none";
}

function supermarket() {
  image.src = "foto/supermarkt.jpg"
  title.innerHTML = "Supermarket"
  tekst.innerHTML = "You've to eat and drink some thing. So you can buy food or not. You can't drive further with your car. You can't drive to home because you've forget to refuel. So you have to take the bus."
  option1.innerHTML = "Get some food and drink";
  option1.setAttribute("onclick", "foodanddrink()");
  option2.innerHTML = "Go to home";
  option2.setAttribute("onclick", "gameover()");
  option3.innerHTML = "Go to the bus";
  option3.setAttribute("onclick", "bus()");
  option4.innerHTML = "Go to the kitchen";
  option4.setAttribute("onclick", "kitchen()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function kitchen() {
  image.src = "foto/keuken.jpg"
  title.innerHTML = "Kitchen"
  tekst.innerHTML = "You're now in the kitchen. Where do you want to play?"
  option1.innerHTML = "Go looking at your phone for a place you can play music";
  option1.setAttribute("onclick", "phone()");
  option2.innerHTML = "Go to home";
  option2.setAttribute("onclick", "home()");
  option3.innerHTML = "Go to the supermarket";
  option3.setAttribute("onclick", "supermarket()");
  option4.innerHTML = "Go to Dordrecht Centraal";
  option4.setAttribute("onclick", "dordrechtcentraal()");
  option5.innerHTML = "Go to Zuidplein";
  option5.setAttribute("onclick", "gameover()");
  option6.innerHTML = "Go to Amsterdam";
  option6.setAttribute("onclick", "gameover()");
  option7.innerHTML = "Go to Rotterdam Centraal";
  option7.setAttribute("onclick", "gameover()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "block";
  option6.style.display = "block";
  option7.style.display = "block";
}

function home() {
  image.src = "foto/huis.jpg"
  title.innerHTML = "Home"
  tekst.innerHTML = ""
  option1.innerHTML = "Go to the living room";
  option1.setAttribute("onclick", "livingroom()");
  option2.innerHTML = "Go to the bedroom";
  option2.setAttribute("onclick", "bedroom()");
  option3.innerHTML = "Go to the kitchen";
  option3.setAttribute("onclick", "kitchen()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "none";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function singingschool() {
  image.src = "foto/zangschool.jpg"
  title.innerHTML = "Singing School"
  tekst.innerHTML = ""
  option1.innerHTML = "Go to the car";
  option.setAttribute("onclick", "car()");
  option2.innerHTML = "Register you";
  option2.setAttribute("onclick", "()")
  option3.innerHTML = "Go to the bus stop";
  option3.setAttribute("onclick", "busstop()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "none";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function busstop() {
  image.src = "foto/bushalte.jpg"
  title.innerHTML = "Bus stop"
  tekst.innerHTML = ""
  option1.innerHTML = "Go to the city hall";
  option1.setAttribute("onclick", "cityhall()");
  option2.innerHTML = "Go to the supermarket";
  option2.setAttribute("onclick", "supermarket()");
  option3.innerHTML = "Go to home";
  option3.setAttribute("onclick", "home()");
  option4.innerHTML = "Go to Mijnsheerenland Park";
  option4.setAttribute("onclick", "mijnsheerenlandpark()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function cityhall() {
  image.src = "foto/gemeentehuis.jpg"
  title.innerHTML = "City Hall"
  tekst.innerHTML = ""
  option1.innerHTML = "Get a permit to play music";
  option1.setAttribute("onclick", "()");
  option2.innerHTML = "Go to the bus stop";
  option2.setAttribute("onclick", "busstop()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "none";
  option4.style.display = "none";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function dordrechtcentraal() {
  image.src = "foto/dortcentraal.jpg"
  title.innerHTML = "Dordrecht Centraal"
  tekst.innerHTML = ""
  option1.innerHTML = "Go play music";
  option1.setAttribute("onclick");
  option2.innerHTML = "Go to the kitchen";
  option2.setAttribute("onclick", "kitchen()");
  option3.innerHTML = "Go to the bus stop";
  option3.setAttribute("onclick", "busstop()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "none";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function phone() {
  image.src = "foto/telefoon.png"
  title.innerHTML = "Phone"
  tekst.innerHTML = ""
  option1.innerHTML = "Look at Dordrecht Centraal";
  option1.setAttribute("onclick", "dort()");
  option2.innerHTML = "Look at Zuidplein";
  option2.setAttribute("onclick", "zuid()");
  option3.innerHTML = "Look at Amsterdam";
  option3.setAttribute("onclick", "amster()");
  option4.innerHTML = "Go to the kitchen";
  option4.setAttribute("onclick", "kitchen()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "none";
  option6.style.display = "none";
  option7.style.display = "none";
}

function computer() {
  image.src = "foto/computer.jpg"
  title.innerHTML = "Computer"
  tekst.innerHTML = ""
  option1.innerHTML = "Singing lessons in Den Boss";
  option1.setAttribute("onclick", "denbos()");
  option2.innerHTML = "Singing lessons in Rotterdam";
  option2.setAttribute("onclick", "rotterdam()");
  option3.innerHTML = "Singing lessons in Den Haag";
  option3.setAttribute("onclick", "denhaag()");
  option4.innerHTML = "Singning lessons in Utrecht";
  option4.setAttribute("onclick", "utrecht()");
  option5.innerHTML = "Go to the bedroom";
  option5.setAttribute("onclick", "bedroom()");
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  option4.style.display = "block";
  option5.style.display = "block";
  option6.style.display = "none";
  option7.style.display = "none";
}

function dort(){
  image.src = "foto/dortcentraal.jpg"
  title.innerHTML = "Dordrecht Centraal"
}

function zuid() {
  image.src = "foto/zuidplein.jpg"
  title.innerHTML = "Zuidplein"
}

function amster() {
  image.src = "foto/amsterdam.jpg"
  title.innerHTML = "Amsterdam"
}

function denbos() {
  image.src = "foto/denbosch.png"
  title.innerHTML = "Den Boss"
}

function rotterdam() {
  image.src = "foto/rotterdam.jpg"
  title.innerHTML = "Rotterdam"
}

function denhaag() {
  image.src = "foto/denhaag.png"
  title.innerHTML = "Den Haag"
}

function utrecht() {
  image.src = "foto/utrecht.jpg"
  title.innerHTML = "Utrecht"
}
