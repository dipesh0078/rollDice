function myfunction()
{var randomNumber1;
randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceImage="dicea"+randomNumber1+".jpg";
var randomImageSource="images/"+randomDiceImage;
var source="images/dicea"+randomNumber1+ ".jpg";
document.querySelectorAll("img")[0].setAttribute("src",source);
var randomNumber2;
randomNumber2=Math.floor(Math.random()*6+1);
var randomDiceImage2="diceb"+randomNumber2+".jpg";
var randomImageSource2="images/"+randomDiceImage2;
var source2=randomImageSource2;
document.querySelectorAll("img")[1].setAttribute("src",source2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
}