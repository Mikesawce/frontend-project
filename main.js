// button functionality
const open = document.querySelectorAll('[data-open-button]')
const close = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
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
