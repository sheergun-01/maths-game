var isplaying = false;
var score;
var reduce;
var timevalue;
var correctAns;
//if the start/reset button is clicked
document.getElementById("startreset").onclick=function(){
    if (isplaying){//reload page if is playing==true
        location.reload()
    }else{
        isplaying = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        document.getElementById("startreset").innerHTML = "Reset Game";
        timevalue = 60;
        document.getElementById("timeramainingvalue").innerHTML = timevalue;
        hide("gameover");
        startCountDown();
        generateQandA();
    }
}
for (i=1;i<5;i++){
    document.getElementById("box"+i).onclick = function(){
        if (this.innerHTML == correctAns){
            score++;
            show("correct");
            document.getElementById("scorevalue").innerHTML = score;
            setTimeout(function(){hide("correct")},1000);
            generateQandA();
        }else{
            show("wrong");
            setTimeout(function(){hide("wrong")},1000);
    
        }
    }
}

function startCountDown(){
    reduce = setInterval(helper,1000);
}
function helper(){
    timevalue--;
    document.getElementById("timeramainingvalue").innerHTML = timevalue;
    if (timevalue == 0){
        stopCountdown();
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>game over!</p><p>your score is " +score+ ".</p>";
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        isplaying = false;
        document.getElementById("startreset").innerHTML = "Start Game";
    }
}
//stop countdown
function stopCountdown(){
    clearInterval(reduce);
}
//hide element
function hide(id){
    document.getElementById(id).style.display = "none";
}
//show element
function show(id){
    document.getElementById(id).style.display = "block";
}
function generateQandA(){
    var x = 1+Math.round(9*Math.random());
    var y = Math.round(9*Math.random());
    correctAns = x*y;
    document.getElementById("question").innerHTML = x+ "x" + y;
    var correctPosition = 1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAns;
    var answers = [correctAns];
    for (i=1;i<5;i++){
        if (i !== correctPosition){
            var wrongAns;
            do{
                wrongAns = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            }while (answers.indexOf(wrongAns)>-1)
            document.getElementById("box"+i).innerHTML = wrongAns;
            answers.push(wrongAns);
        }
    }
}
