$(document).ready(function(){
    // random number generated is between 19-120
    var Generated = Math.floor(Math.random()*101+19)
    $('#randomNumber').html(Generated);

    // numbers randomly generated between 1-12 for each gem
    var red = Math.floor(Math.random()*11+1);
    var orange = Math.floor(Math.random()*11+1);
    var blue = Math.floor(Math.random()*11+1);
    var green = Math.floor(Math.random()*11+1);

    var PlayerTotal = 0;
    var wins = 0;
    var losses = 0;

    //  add gem scores for each click on the gems
    //  append the values to each other to generate the player total
    //  reset the random number and each individual gem values

})