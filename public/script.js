const botaoEnviar = document.getElementById('enviar');
const caixaDeMensagem = document.getElementById('texto');
const chat =document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaDeMensagem.value !== ""){
        socket.emit('nova mensagem', caixaDeMensagem.value);
        caixaDeMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li') //<li></li>
    elementoMensagem.textContent = msg; //<li>pam pam pamrampa pam pam</li>
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
})