"use strict"
let btn = document.getElementById('btn')
let cont = document.getElementById('cont')
let angle = 0
let radius = 60
let btn_size = 36
let i = 1
let current_x = screen.width / 2
let current_y = screen.height / 2

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function set_btn_pos_x(pos) {
  btn.style.left = (pos - btn_size / 2).toString()+'px'
}

function set_btn_pos_y(pos) {
  btn.style.top = (pos - btn_size / 2).toString()+'px'
}

function main_process() {
  angle = i * Math.PI / 180
  set_btn_pos_x( current_x + Math.cos(angle) * radius)
  set_btn_pos_y( current_y + Math.sin(angle) * radius)
  i += 2
  if (i == 361) i = 1;
  sleep(1).then(() => { 
    main_process()
 });
}

function get_coords(event) {
  event = event || window.event
  event.preventDefault()
  current_x = event.pageX
  current_y = event.pageY
}

cont.onmousemove = get_coords

main_process()

