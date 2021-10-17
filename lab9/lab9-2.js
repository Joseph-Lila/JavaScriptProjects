"use strict"
let btn = document.getElementById('btn')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function getCoords(event) {
    event = event || window.event
    btn.style.visibility='hidden'
    sleep(3000).then(() => { 
        btn.style.top = (Math.random() * 90).toString()+'%'
        btn.style.left = (Math.random() * 90).toString()+'%'
        btn.style.visibility='visible'
     });
}

btn.onmouseover = getCoords