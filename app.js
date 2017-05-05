
var button = [];                    //array of buttons
var drawState = [];                 //array to draw in canvas
var used = [];
var content = [];
var flag = 0;

for (var i = 1 ; i < 10 ;i++) {
    button[i] = document.getElementById('layer'+i);  //calls the canvas id in html file 
}

for (var i = 1 ; i < 10 ;i++) {
        used[i] = false;
}


for (var i = 1; i < 10; i++) {
        drawState[i] = button[i].getContext('2d');
}

function legalClicks(index) {  
    if (flag == 0) {
        if (!used[index]) {
        used[index] = true;
        content[index] = 'x';
        drawState[index].lineWidth = 2;
        drawState[index].beginPath();
        drawState[index].moveTo(10,10);
        drawState[index].lineTo(40,40);
        drawState[index].moveTo(40,10);
        drawState[index].lineTo(10,40);
        drawState[index].stroke();
        drawState[index].closePath();
        }
        flag = 1;
    }
    else{
        used[index] = true;
        content[index] = '0';
        drawState[index].beginPath();
        drawState[index].lineWidth = 3;
        drawState[index].arc(28,28,20,0,Math.PI*2,false);
        drawState[index].stroke();
        drawState[index].closePath();
        flag = 0;
    }
   checkGame();
}

function checkGame() {
    if (content[1] == 'x' && content[2] == 'x' && content[3] =='x') {
        alert('Player 1 won');
    }
    else if (content[1] == 'x' && content[4] == 'x' && content[7] =='x') {
        alert('Player 1 won');
    }
    else if (content[1] == 'x' && content[5] == 'x' && content[9] =='x') {
        alert('Player 1 won');
    }
    else if (content[2] == 'x' && content[5] == 'x' && content[8] =='x') {
        alert('Player 1 won');
    }
    else if (content[3] == 'x' && content[6] == 'x' && content[9] =='x') {
        alert('Player 1 won');
    }
    else if (content[3] == 'x' && content[5] == 'x' && content[7] =='x') {
        alert('Player 1 won');
    }
    if (content[4] == 'x' && content[5] == 'x' && content[6] =='x') {
        alert('Player 1 won');
    }
    else if (content[7] == 'x' && content[8] == 'x' && content[9] =='x') {
        alert('Player 1 won');
    }
    else {
        continue;
    }
}
