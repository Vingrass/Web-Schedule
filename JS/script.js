var saveSched9am = document.querySelector('#saveSched9am');
var saveSched10am = document.querySelector('#saveSched10am');
var saveSched11am = document.querySelector('#saveSched11am');
var saveSched12pm = document.querySelector('#saveSched12pm');
var saveSched1pm = document.querySelector('#saveSched1pm');
var saveSched2pm = document.querySelector('#saveSched2pm');
var saveSched3pm = document.querySelector('#saveSched3pm');
var saveSched4pm = document.querySelector('#saveSched4pm');
var saveSched5pm = document.querySelector('#saveSched5pm');

var clearSched = document.querySelector('#clearSched');

var currentHour = new Date().getHours();
console.log(currentHour);

var eventIDlist = ["am9","am10","am11","pm12","pm1","pm2","pm3","pm4","pm5"];
var btnIDlist = ["saveSched9am","saveSched10am","saveSched11am","saveSched12pm",
                    "saveSched1pm","saveSched2pm","saveSched3pm","saveSched4pm","saveSched5pm"]




saveSched9am.addEventListener("click", () => saveEvent(0));
saveSched10am.addEventListener("click", () => saveEvent(1));
saveSched11am.addEventListener("click", () => saveEvent(2));
saveSched12pm.addEventListener("click", () => saveEvent(3));
saveSched1pm.addEventListener("click", () => saveEvent(4));
saveSched2pm.addEventListener("click", () => saveEvent(5));
saveSched3pm.addEventListener("click", () => saveEvent(6));
saveSched4pm.addEventListener("click", () => saveEvent(7));
saveSched5pm.addEventListener("click", () => saveEvent(8));


timeCheck(currentHour);
showSaved();

function timeCheck(currHour){

    if(currHour < 9){
        currHour = 9;
    }

    changeColor(currHour - 9);

}

function changeColor(timeID){

    document.getElementById(eventIDlist[timeID]).innerHTML = "boobs lol" ;


    for(let i = 0; i < timeID; i++){
        document.getElementById(eventIDlist[i]).style.backgroundColor = "gray";
    }
    for(let j = timeID + 1; j < eventIDlist.length; j++){
        document.getElementById(eventIDlist[j]).style.backgroundColor = "green";
    }

}

function saveEvent(eventID){

    localStorage.setItem(eventIDlist[eventID], document.getElementById(eventIDlist[eventID]).innerHTML);

}

function showSaved(){

    for(let i = 0; i < eventIDlist.length; i++){
        if(localStorage.getItem(eventIDlist[i])){
            document.getElementById(eventIDlist[i]).innerHTML = localStorage.getItem(eventIDlist[i]);
        }
    }

}