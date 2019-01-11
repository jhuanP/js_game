/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){
     //all your code goes inside here!


let teamoneshoot = document.querySelector("#teamone-shoot");
let teamtwoshoot = document.querySelector("#teamtwo-shoot");
let teamOneShotcounter = document.querySelector("#teamone-numshots");
let teamTwoShotcounter = document.querySelector("#teamtwo-numshots");
let teamOneHitcounter = document.querySelector("#teamone-numhits");
let teamTwoHitcounter = document.querySelector("#teamtwo-numhits");
let resetcounter1 = document.querySelector('#team1reset');
let resetcounter2 = document.querySelector('#team2reset');
let team1reset = document.querySelector('#team1num-resets');
let team2reset = document.querySelector('#team2num-resets');
let clearResets = document.querySelector("#ClearReset");
teamoneshoot.addEventListener("click",function(){
     teamOneShotcounter.innerHTML = parseInt(teamOneShotcounter.innerHTML) + 1;
     if(Math.random()*2>1){
          teamOneHitcounter.innerHTML = parseInt(teamOneHitcounter.innerHTML) + 1;
     }
});
teamtwoshoot.addEventListener("click",function(){
     teamTwoShotcounter.innerHTML = parseInt(teamTwoShotcounter.innerHTML) + 1;
     if(Math.random()*2>1){
          teamTwoHitcounter.innerHTML = parseInt(teamTwoHitcounter.innerHTML) + 1;
     }
});
resetcounter1.addEventListener("click",function(){
     team1reset.innerHTML = parseInt(team1reset.innerHTML)+ 1;
    teamOneShotcounter.innerHTML = 0;
    teamOneHitcounter.innerHTML = 0;
    teamTwoShotcounter.innerHTML = 0;
    teamTwoHitcounter.innerHTML =0;
});
resetcounter2.addEventListener("click",function(){
     team2reset.innerHTML = parseInt(team2reset.innerHTML)+ 1;
    teamOneShotcounter.innerHTML = 0;
    teamOneHitcounter.innerHTML = 0;
    teamTwoShotcounter.innerHTML = 0;
    teamTwoHitcounter.innerHTML =0;
});
clearResets.addEventListener("click", function(){
          team1reset.innerHTML = 0;
          team2reset.innerHTML = 0;

});

})()
