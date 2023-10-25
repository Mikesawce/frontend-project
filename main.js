//button for create email
//button for send email
//window for email
//elements for forms and such

function createModal() {
    const body = document.getElementsByTagName('body')
    const div = document.createElement('div')
    div.className = `modal`
    div.id = `modal`

    body.appendChild(modalHeader)
    body.appendChild(modalBody)
}

function modalHeader() {
    const modalHead = document.createElement('h1')
    //add title
    //add btn
}

function modalBody() {
    const modalBody = document.createElement('div');
    modalBody.textContent = `yes`
}

function modalHeaderTitle() {
    const div = document.createElement('div')
    div.textContent = `email`
}

function modalHeaderExit() {
    const btn = document.createElement('button')

}

// button functionality

const openButton = document.querySelector('[data-open-button]')
const closeButton = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')

openButton.forEach(button => {
    button.addEventListener('click', () => {
        
    })
});