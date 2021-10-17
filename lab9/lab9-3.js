"use strict"
let ball = document.getElementById('ball')
let body = document.body
let current_x = 50
let current_y = 50
let previous_x = 50
let previous_y = 50
let step = 2
let i


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function ball_move_x_to(to) {
    ball.style.left = (to - 50).toString()+'px'
}

function ball_move_y_to(to) {
    ball.style.top = (to - 50).toString()+'px'
}

function update_pos(event) {
    previous_x = current_x
    previous_y = current_y
    ball_move_y_to(previous_y)
    ball_move_x_to(previous_x)
    current_x = event.pageX
    current_y = event.pageY
}

function do_step() {
    if (Math.abs(current_x - previous_x) > Math.abs(current_y - previous_y)){
        if (current_x > previous_x) {
            ball_move_x_to(previous_x + step)
            previous_x += step
        } else {
            ball_move_x_to(previous_x - step)
            previous_x -= step
        }
        if (current_y > previous_y) {
            ball_move_y_to(previous_y + step * Math.abs(current_y - previous_y) / Math.abs(current_x - previous_x))
            previous_y += step * Math.abs(current_y - previous_y) / Math.abs(current_x - previous_x)
        } else {
            ball_move_y_to(previous_y - step * Math.abs(current_y - previous_y) / Math.abs(current_x - previous_x))
            previous_y -= step * Math.abs(current_y - previous_y) / Math.abs(current_x - previous_x)
        }
    } else {
        if (current_x > previous_x) {
            ball_move_x_to(previous_x + step / Math.abs(current_y - previous_y) * Math.abs(current_x - previous_x))
            previous_x += step / Math.abs(current_y - previous_y) * Math.abs(current_x - previous_x)
        } else {
            ball_move_x_to(previous_x - step / Math.abs(current_y - previous_y) * Math.abs(current_x - previous_x))
            previous_x -= step / Math.abs(current_y - previous_y) * Math.abs(current_x - previous_x)
        }
        if (current_y > previous_y) {
            ball_move_y_to(previous_y + step)
            previous_y += step 
        } else {
            ball_move_y_to(previous_y - step)
            previous_y -= step
        }
    }
    sleep(1).then(() => {
        if (Math.abs(current_x - previous_x) >= step || Math.abs(current_y - previous_y) >= step) {
            do_step()
            }   
        }
    )
}

function ball_moving(event) {
    event = event || window.event
    event.preventDefault()
    if (event.pageX < 50 + step || event.pageX > screen.width - step - 50) return
    if (event.pageY < 50 + step || event.pageY > screen.height - step) return
    update_pos(event)
    do_step()
}

body.onclick = ball_moving
