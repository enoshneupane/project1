//this file is the brain of the app
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
    //checkGame();
}

function checkGame() {
    for (var i = 1; i < 10; i++) {
    //     if (content[i] == 'x') {
    //         if ((content[] )content[2] && content[3])) {
    //             alert("Player 1 Won");
    //             break;
    //         }
    //         else if (content[1] == content[4] && content[7]) {
    //             alert("Player 1 Won");
    //             break;
    //         }
    //         else if (content[2] == content[5] && content[8]) {
    //             alert("Player 1 Won");
    //             break;
    //         }
    //         else if (content[3] == content[6] && content[9]) {
    //             alert("Player 1 Won");
    //             break;
    //         }
    //     }
    }
}

function reInitialize() {
    for (var i = 1; i < 10; i++) {
        context.clearRect(0, 0, 0, 0);
    }
}

