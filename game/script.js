//selecting box, paragrah
var guessnumber=document.getElementById("guessnum")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomNumber=Math.floor(Math.random()*10)+1

//score
var totalscore=10
function check()
{
    var enterednumber = guessnum.value
    if(randomNumber==enterednumber)
    {
       result.textContent="Right"
        alert("YOU WON!!! ")
    }
    else{
        totalscore=totalscore-1
        score.textContent="score:"+totalscore
        result.textContent="Wrong"
        if( totalscore==0){
            alert("YOU LOOSE!!! Try Again...")
        }
    }
}
