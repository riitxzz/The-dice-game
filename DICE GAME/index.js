var randomNumber = Math.floor( Math.random() *6 )+1;  //1-6 nos for dice 1.
 
var randomDiceImage= "image/"+"dice"+randomNumber+".png";    //dice 1 image  with respective nos. 

document.querySelectorAll("img")[0].setAttribute( "src",randomDiceImage); // dice 1 sorted.

//document.querySelectorAll("img")[1].setAttribute( "src",randomDiceImage); //this line will end up getting same nos. 

var randomNumber2=  Math.floor( Math.random()*6)+1;  // 1-6 nos for dice 2.

var randomDiceImage2= "image/"+"dice"+randomNumber2+".png"; //dice 2 images with respective nos. 

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2); //dice 2  sorted.
  
if( randomNumber > randomNumber2){                         //if player 1 wins!
    document.querySelector("h1").innerHTML= "Player 1 wins🎲!!"
}

else if (randomNumber2 > randomNumber) {                  //player 2 wins!
    document.querySelector("h1").innerHTML ="Player 2 wins🎲!!"
}

else{                                                    //tie breaker!
    document.querySelector("h1").innerHTML ="Its a tie🎲!"
}