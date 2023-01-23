const socket= io('ws://localhost:8080')

const ul=document.querySelector('ul')
const form=document.querySelector('form')

socket.on('message', text =>{
    const el=document.createElement('li')
    el.innerHTML=text
    ul.appendChild(el)
})

form.addEventListener('submit', event =>{
    event.preventDefault()
    let message=form.elements.namedItem('input').value
    socket.emit('message', message)
})