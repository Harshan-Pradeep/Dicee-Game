// To get random dice images firstly generate random numbers between 1 to 6
// then change images accrording to those random numbers 
var randomNumber1=Math.floor(Math.random()*6+1);
document.querySelector(".img1").src=`./images/dice${randomNumber1}.png`;

var randomNumber2=Math.floor(Math.random()*6+1);
document.querySelector(".img2").src=`./images/dice${randomNumber2}.png`;

//To predict who is the winner i used conditional statements.
if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Win!";
}
else{
    document.querySelector("h1").textContent="Player 2 Win!";
}