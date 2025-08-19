const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// This function adds a message to the chat box
function displayMessage(message, messageType) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageType);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// This function is triggered when the user sends a message
function sendMessage() {
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    displayMessage(messageText, 'user-message');
    userInput.value = '';

    // Send the user's message to the Java backend
    fetch('http://localhost:8080/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: messageText,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(botResponse => {
        displayMessage(botResponse, 'bot-message');
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('Sorry, something went wrong with the AI.', 'bot-message');
    });
}