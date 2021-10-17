"use strict"
let my_form = document.my_form
let my_line = document.getElementById('my_line')
let my_radiobtns = document.getElementsByClassName('my_rad')
let line_size = my_form.line_size
let line_width = my_form.line_width
let colors = my_form.colors
/*
Необходимо убрать стандартные настройки браузера для возможности изменять значения
атрибутов формы. 
*/

function stopDefAction(evt) {
    evt.preventDefault()
}

let processing_btn = document.getElementById('processing')
let update_btn = document.getElementById('update')

processing_btn.addEventListener('click', stopDefAction, false)
update_btn.addEventListener('click', stopDefAction, false)

//Теперь, нажимая на кнопки, изменения будут отображаться на странице

start_preset()  

function change_line_size(value) {
    my_line.style.height = value + 'px'
}

function change_line_width(value) {
    my_line.style.width = value + 'px'
}

function change_line_align(value) {
    if (value === 'CENTER') {
        my_line.style.margin = 'auto'
    } else if(value === 'RIGHT') {
        my_line.style.margin = 'auto'
        my_line.style.marginRight = '0%'
    } else {
        my_line.style.margin = 'auto'
        my_line.style.marginLeft = '0%'
    }
}

function set_checked_radio_btn(value) {
    for (let i = 0; i < my_radiobtns.length; i++) {
        my_radiobtns[i].checked = false
        if (my_radiobtns[i].value === value) {
            my_radiobtns[i].checked = true
        }
    }
}

function change_selected_color(value) {
    colors.value = value
}

function set_lines_color(value) {
    my_line.style.backgroundColor = value
    my_line.style.color = value
}

function set_input_size_value(value) {
    line_size.value = value
}

function set_input_width_value(value) {
    line_width.value = value
}

function start_preset() {
    set_input_size_value('25')
    change_line_size('25')
    set_input_width_value('270')
    change_line_width('270')
    set_checked_radio_btn('CENTER')
    change_line_align('CENTER')  
    set_lines_color('teal')
    change_selected_color('teal')
}

function change_preset() {
    change_line_size(line_size.value)
    change_line_width(line_width.value)
    for(let i = 0; i < my_radiobtns.length; i++){
        if(my_radiobtns[i].checked === Boolean('true')) {
            change_line_align(my_radiobtns[i].value)
        }
    }  
    set_lines_color(colors.value)
}

update.onclick = start_preset

processing_btn.onclick = change_preset