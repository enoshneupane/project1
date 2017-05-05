    var button = [];                    //array of buttons
    var drawState = [];                 //array to draw in canvas
    var used = [];                      //array to mark used and not used
    var content = [];                   //array to check the drawing shapes or string shapes
    var flag = 0;                       //useful for switching between players
    
    for (var i = 1 ; i < 10 ;i++) {
        button[i] = document.getElementById('layer'+i);  //calls the canvas id in html file 
    }
    
    for (var i = 1 ; i < 10 ;i++) {
            used[i] = false;                            //set all the block of grid to not used initially
    }
    
    for (var i = 1; i < 10; i++) {
            drawState[i] = button[i].getContext('2d');  //method returns a drawing context on the canvas, or null 
    }
    
    //params: index that represent the layer of canvas
    //effects : depending on player it draws shape on canvas, calls checkWin to find winner and 
    //displays message accordingly
    //returns :none
    //this function is called in html whenever an user click the canvas

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
       var win1 = checkWin("x");
       
       if (win1 == 1) {
           alert("Player 1 Won");
           return;
       }
       
       var win2 = checkWin("0");
       if (win2 == 1) {
            alert("Player 2 Won");
            return;
        }
       checkTie();       
    }
    
    //params : take string "x" or "0"
    //effects :finds winning combination and choses winner
    //minimum of 3 layers in grid should be matched to win so it take that into account and 
    //checks the combination in valid places
    function checkWin(z) {
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
    
    //params: none
    //efffects: if all layers have shapes drawn and there is no winning combination, its draw
    //returns : boolean true if its tie
    function checkTie() {
        for (var i = 1; i < 10; i++) {
            if (content[i] != 'x' && content[i] != '0') {  
                return false;
            }
        }
    alert("Draw!  Play again!");
    return true;
    }
