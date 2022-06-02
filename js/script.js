var guess = 1;
const Success = new Audio('music/Success.mp3');
const Error = new Audio('music/Error.wav');
const gameOver = new Audio('music/gameover.mp3')

function clearThis(target) {
    target.value= "";
}


var y = Math.floor(Math.random() * 20 + 1);
console.log(y);

document.getElementById("submit").onclick = function() {
    
    var x = document.getElementById("text").value;

    if (x == y) {
        document.getElementById("content").innerHTML = "Congratulations!!!Number is Match in "+guess+" guess"
        document.body.style.backgroundColor = "green";
        Success.play();
    }
    else if(x > y ){
        guess++;
        document.getElementById("content").innerHTML = " Opps!!! Number is high"
        Error.play();
        clearThis();
    }
    else if(x < y){
        guess++;
        document.getElementById("content").innerHTML = " Opps!!! Number is low"
        Error.play();
        clearThis();
    }
    else{
        guess++;
        document.getElementById("content").innerHTML = " Please!!! Enter valid Number"
        gameOver.play();
    }
}

