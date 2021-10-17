"use strict"
let back = document.getElementById('back')
let forv = document.getElementById('forv')
let open = document.getElementById('open_btn')
let check = document.getElementById('check')
let inp = document.getElementById('inp')
let my_frame = document.getElementById('my_frame')

/*
Необходимо убрать стандартные настройки браузера для возможности изменять значения
атрибутов формы. 
*/

function stopDefAction(evt) {
    evt.preventDefault()
}

back.addEventListener('click', stopDefAction, false)
forv.addEventListener('click', stopDefAction, false)
open_btn.addEventListener('click', stopDefAction, false)

function open_window() {
    if (check.checked === Boolean('true')) {
        window.open(inp.value)
    } else {
        my_frame.src=inp.value
    }
}

back.onclick = function () {
    history.back()
}

forv.onclick = function() {
    history.forward()
}

open_btn.onclick = open_window