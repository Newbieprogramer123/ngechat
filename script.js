const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = event.data;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
    const input = document.getElementById('message-input');
    if (input.value) {
        socket.send(input.value);
        input.value = '';
    }
}
