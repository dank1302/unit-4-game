alert('Welcome to the Crystal Collector game.')
$(document).ready(function() {
    var randomNumber=Math.floor(Math.random()*102+19)

    $(`#number`).text(randomNumber);

    var gem1= Math.floor(Math.random()*12+1)
    var gem2= Math.floor(Math.random()*12+1)
    var gem3= Math.floor(Math.random()*12+1)
    var gem4= Math.floor(Math.random()*12+1)

    var score= 0;
    var wins= 0;
    var losses= 0;

    $(`#wins`).text(wins);
    $(`#losses`).text(losses);

    function reset() {
        randomNumber=Math.floor(Math.random()*102+19);
        $(`#number`).text(randomNumber);
        gem1= Math.floor(Math.random()*12+1);
        gem2= Math.floor(Math.random()*12+1);
        gem3= Math.floor(Math.random()*12+1);
        gem4= Math.floor(Math.random()*12+1);
        score= 0;
        $(`#score`).text(score);

    }
    
    function nice() {
        alert("Nice, you won that round!");
        wins++;
        $(`#wins`).text("Wins: " + wins);
        reset();
    }
   function bummer() {
       alert("Bummer, you lost that round!");
       losses++;
       $(`#losses`).text("Losses: " + losses);
       reset();
   }

   $(`.blue`).on(`click`,function() {
       score= score + gem1;
       $(`#score`).text(score);
       if(score == randomNumber) {
           nice();
       }
       else if(score > randomNumber) {
           bummer();
       }
   })

   $(`.green`).on(`click`, function() {
       score= score + gem2;
       $(`#score`).text(score);
       if(score == randomNumber) {
           nice();
       }
       else if(score > randomNumber){
           bummer();
       }
   })

   $(`.pink`).on(`click`, function() {
       score= score + gem3;
       $(`#score`).text(score);
       if(score == randomNumber) {
           nice();
       }
       else if(score > randomNumber) {
           bummer();
       }
       })

       $(`.yellow`).on(`click`, function() {
           score= score + gem4;
           $(`#score`).text(score);
           if(score == randomNumber) {
               nice();
           }
           else if(score > randomNumber) {
               bummer();
           }
       });
});