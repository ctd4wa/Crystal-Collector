$(document).ready(function(){
    // random number generated is between 19-120
    var Generated = Math.floor(Math.random()*101+19);
    $('#randomNumber').html(Generated);

    // numbers randomly generated between 1-12 for each gem
    var red = Math.floor(Math.random()*12)+1;
    var orange = Math.floor(Math.random()*12)+1;
    var blue = Math.floor(Math.random()*12)+1;
    var green = Math.floor(Math.random()*12)+1;

    var PlayerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#Wins').text(wins);
    $('#Losses').text(losses);
    $('#UserTotal').text(PlayerTotal);

    //  reset the random number and each individual gem values
    function reset(){
        Generated = Math.floor(Math.random()*101+19);
        console.log(Generated)
        $('#randomNumber').text(Generated);
        red = Math.floor(Math.random()*12)+1;
        orange = Math.floor(Math.random()*12)+1;
        blue = Math.floor(Math.random()*12)+1;
        green = Math.floor(Math.random()*12)+1;
        PlayerTotal = 0;
        $('#UserTotal').text(PlayerTotal);
    }

    //  if statement: if the Player score === randomNumber, win++
    function winner(){
        alert("Well done!");
        wins++;
        $('#Wins').text(wins);
        reset();
    }

    //  if Player score > randomNumber, lose++
    function loser(){
        alert("Oh no!");
        losses++;
        $('#Losses').text(losses);
        reset()
    }
    //  add gem scores for each click on the gems
    $('#Sun').on('click',function(){
    //  append the values to each other to generate the player total
        PlayerTotal = PlayerTotal + red;
        console.log("New UserTotal = " + PlayerTotal);
        $('#UserTotal').text(PlayerTotal);
            if (PlayerTotal == Generated) {
                winner();
            }
            else if (PlayerTotal > Generated) {
                loser();
            }
    });

    $('#Fire').on('click',function(){
        PlayerTotal = PlayerTotal + orange;
        console.log("New UserTotal = " + PlayerTotal);
        $('#UserTotal').text(PlayerTotal);
            if (PlayerTotal == Generated) {
                winner();
            }
            else if (PlayerTotal > Generated) {
                loser();
            }
    });

    $('#Water').on('click',function(){
        PlayerTotal = PlayerTotal + blue;
        console.log("New UserTotal = " + PlayerTotal);
        $('#UserTotal').text(PlayerTotal);
            if (PlayerTotal == Generated) {
                winner();
            }
            else if (PlayerTotal > Generated) {
                loser();
            }
    });

    $('#Thunder').on('click',function(){
        PlayerTotal = PlayerTotal + green;
        console.log("New UserTotal = " + PlayerTotal);
        $('#UserTotal').text(PlayerTotal);
            if (PlayerTotal == Generated) {
                winner();
            }
            else if (PlayerTotal > Generated) {
                loser();
            }
    });
})