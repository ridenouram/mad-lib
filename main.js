function madLib(){
    //get the inputs by id
    var alienNameInput = document.getElementById('alien-name');
    var planetNameInput = document.getElementById('planet-name');
    var noticedInput = document.getElementById('noticed');
    var noticedDoingInput = document.getElementById('noticed-doing');
    var alienReactionInput = document.getElementById('alien-reaction');
    
    //get the values out of imputs
    
    var alienName = alienNameInput.value;
    var planetName = planetNameInput.value;
    var noticed = noticedInput.value;
    var noticedDoing = noticedDoingInput.value;
    var alienReaction = alienReactionInput.value;
    
    
    //make the madlib
    var madLibb = 'An Alien named ' + alienName + ' arrives on planet earth after a long trip from Planet ' + planetName + '. After leaving the space ship, the alien looks up at the sky and notices a ' + noticed + ' ' + noticedDoing + '. After seeing that for the first time, the alien ' + alienReaction + 's.'; 
    console.log(madLibb);
    
    //display madlib

    var maddestLib = document.getElementById('maddest-lib');
    maddestLib.textContent = madLibb;


}