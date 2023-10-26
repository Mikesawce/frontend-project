// button functionality

const open = document.querySelectorAll('[data-open-button]')
const close = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach((modal) => {
        closeModal(modal)
    })
})

open.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.openButton)
        openModal(modal)
    })
})

close.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

let body = document.getElementById('message').value

function caeserCipher(message) {
    let result = ''
    for (let letter of message) {
        if (letter.toUpperCase(letter)) {
            let char = String.fromCharCode((letter.charCodeAt(0) + 4 - 65) % 26 + 65)
            result += char
        } else {
            let char = String.fromCharCode((char.charCodeAt(0) + 4 - 97) % 26 + 97)
            result += char
        }
    }
    return result
}


function emailSend(body) {
    Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'michael.mote1993@gmail.com',
        Password: '1948991BB027EC12EDEA43EAF9C63DC8ABB9',
        To: 'michael.mote1993@gmail.com',
        From: 'michael.mote1993@gmail.com',
        Subject: 'THE NUMBERS MASON, WHAT DO THEY MEAN?',
        Body: body
    }).then((message) => alert(message))
}
