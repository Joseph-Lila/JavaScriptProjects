"use strict"
var form = document.querySelector('.form_with_validation')
var validateBtn = form.querySelector('.validateBtn')
var password_ser = form.querySelector('.password_ser')
var password_num = form.querySelector('.password_num')
var form_num = form.querySelector('.form_num')
var subject = form.querySelector('.subject')
var picture_code = form.querySelector('.picture_code')
var fields = form.querySelectorAll('.field')

function check_password_ser(str) {
    if (str.length != 2) return false
    let res = str.match(/[a-z]+/ig);
    if (res) {
    let size = res.join('').length
    if (size != 2) return false 
    } else {
        return false
    }
    return true
}

function check_seven_numbers(str) {
    if (str.length != 7) return false
    let res = str.match(/[0-9]+/ig);
    if (res) {
    let size = res.join('').length
    if (size != 7) return false 
    } else {
        return false
    }
    return true
}


form.addEventListener('submit', function (event) {
    event.preventDefault()
    
    var errors = form.querySelectorAll('.error')

    for(let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            var error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.innerHTML = 'Поле должно быть заполнено'
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }

    if (!check_seven_numbers(password_num.value)) {
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Номер паспорта должен содержать 7 цифр'
        password_num.parentElement.insertBefore(error, password_num)
    }

    if (!check_seven_numbers(form_num.value)) {
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Номер бланка ответа должен содержать 7 цифр'
        form_num.parentElement.insertBefore(error, form_num)
    }

    if (!check_password_ser(password_ser.value)) {
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Серия паспорта должна содержать только две латинские буквы'
        password_ser.parentElement.insertBefore(error, password_ser)
    }
    
    if (subject.value === 'empty') {
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Выберите предмет'
        subject.parentElement.insertBefore(error, subject)
    }

    if (picture_code.value !== '424636') {
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Неверный код'
        picture_code.parentElement.insertBefore(error, picture_code)
    }
})
