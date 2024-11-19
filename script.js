const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'history') {
        // Tampilkan history chat
        data.data.forEach(message => addMessageToChatBox(message));
    } else if (data.type === 'message') {
        // Tampilkan pesan baru
        addMessageToChatBox(data.data);
    }
};

function sendMessage() {
    const input = document.getElementById('message-input');
    if (input.value) {
        socket.send(input.value);
        input.value = '';
    }
}

function addMessageToChatBox(message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${message.user}:</strong> ${message.text} <span class="timestamp">${message.timestamp}</span>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
