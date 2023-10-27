

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


// encryption algorithm
function caesarCipher(message, shift) {
    let result = '';
    for (let letter of message) {
        let charCode = letter.charCodeAt(0);
        if (letter >= 'A' && letter <= 'Z') {
            result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (letter >= 'a' && letter <= 'z') {
            result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            result += letter;
        }
    }
    return result;
}
// send email takes text and passes to encryption algorithm
function emailSend() {
    let body = document.getElementById('message').value
    let messageBody = caesarCipher(body, 4)
    Email.send({
        Host: 'smtp.elasticemail.com',
        Username: '',
        Password: '',
        To: 'michael.mote1993@gmail.com',
        From: 'michael.mote1993@gmail.com',
        Subject: 'THE NUMBERS MASON, WHAT DO THEY MEAN?',
        Body: messageBody
    }).then((message) => alert(message))
}


