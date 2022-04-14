var seconds = 0;
var minutes = 0;
var start = document.getElementById('start');
var stopp = document.getElementById('stop');
var clear = document.getElementById('clear');
var t;
var clock_on = false;
timer()



function home_team_goal(goal) {
    document.getElementById("home-team-score").innerHTML = goal;
}


function away_team_goal(goal) {
    document.getElementById("away-team-score").innerHTML = goal;
}

function game_start_animation(start_frame, frame_number, end_frame) {
    var element = document.getElementById("flexcontainer");
    var animationStep = (frame_number - start_frame) / (end_frame - start_frame);
    //element.style.top = (animationStep * 251) + 'px';
    element.style.opacity = animationStep;
    //element.style.top = 30 + "px";
    // document.getElementById("debug-text").innerText = "Animation step: " +  animationStep + " Startframe : " + start_frame + " Endframe " +
    // end_frame + " Frame number: " + frame_number;
}

function remove_spons_animation(start_frame, frame_number, end_frame) {
    var element = document.getElementById("sponsor");
    var diff = end_frame - start_frame;
    element.style.opacity = 1 - (frame_number - start_frame) / diff;
}

function add_spons_animation(start_frame, frame_number, end_frame) {
    var element = document.getElementById("sponsor");
    var diff = end_frame - start_frame;
    element.style.opacity = (frame_number - start_frame) / diff;
}

function tick(num) {
    var minutes = Math.floor(num / 60);
    var seconds = num % 60;
    var time = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    document.getElementById("time").innerText = time;


}

function tick_wallclock() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    var time = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    document.getElementById("time").innerText = time;
    document.getElementById("time").innerHTML = time;
    timer();
}


function timer() {
    t = setTimeout(tick_wallclock, 1000);
    clock_on = true;
}

/* Start button */
function start_tick() {
    if (clock_on) {} else {
        timer();
        clock_on = true;
    }
}
/* Stop button */
function stop_tick() {
    clock_on = false;
    clearTimeout(t);
}
/* Clear button */
function clear_clock() {
    var time = "00:00"
    document.getElementById("time").innerText = time;
    document.getElementById("time").innerHTML = time;
    seconds = 0;
    minutes = 0;
}