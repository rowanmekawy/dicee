var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomNumber1+".png")
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomNumber2+".png")
if (randomNumber1 === randomNumber2){
    var new_h1 = "Draw !"
} else if (randomNumber1 > randomNumber2){
    var new_h1 = "Player One Win !"
}
else{
    var new_h1 = "Player Two Win !"
}
document.querySelector("h1").innerHTML =  new_h1