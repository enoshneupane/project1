    
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
            drawState[index].lineWidth = 3;
            drawState[index].beginPath();
            drawState[index].moveTo(20,20);
            drawState[index].lineTo(60,60);
            drawState[index].moveTo(40,10);
            drawState[index].lineTo(40,80);
            drawState[index].stroke();
            drawState[index].closePath();
            }
            flag = 1;
        }
        else{
            if (!used[index]) {
            used[index] = true;
            used[index] = true;
            content[index] = '0';
            drawState[index].beginPath();
            drawState[index].lineWidth = 3;
            drawState[index].arc(45,48,28,0,Math.PI*2,false);
            drawState[index].stroke();
            drawState[index].closePath();
            }
            flag = 0; 
        }
       var win1 = checkGame("x");
       
       if (win1 == 1) {
           alert("Player 1 Won");
           player1Score++;
       }
       var win2 = checkGame("0");
       if (win2 == 1) {
            alert("Player 2 Won");
            player2Score++;
        }
    }
    
    function checkGame(z) {
        if (content[1] == z && content[2] == z && content[3] == z) {
            return 1;
        }
        else if (content[1] == z && content[4] == z && content[7] == z) {
            return 1;
        }
        else if (content[1] == z && content[5] == z && content[9] == z) {
            return 1;
        }
        else if (content[2] == z && content[5] == z && content[8] == z) {
            return 1;
        }
        else if (content[3] == z && content[6] == z && content[9] == z) {
            return 1;
        }
        else if (content[3] == z && content[5] == z && content[7] == z) {
            return 1;
        }
        if (content[4] == z && content[5] == z && content[6] == z) {
            return 1;
        }
        else if (content[7] == z && content[8] == z && content[9] == z) {
            return 1;
        }
    }
    
