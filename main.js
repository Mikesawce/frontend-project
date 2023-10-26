// button functionality
const open = document.querySelectorAll('[data-open-button]')
const close = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const submit = document.getElementById('submit')
const testText = document.getElementById('test')
const testBtn = document.getElementById('testBtn')
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
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

function caeserCipher(message, key) {
    let result = ''
    for (let letter of message) {
        if (letter.toUpperCase(letter)) {
            let char = String.fromCharCode((letter.charCodeAt(0) + key - 65) % 26 + 65)
            result += char
        } else {
            let char = String.fromCharCode((char.charCodeAt(0) + key - 97) % 26 + 97)
            result += char
        }    
    }
    return result
}
