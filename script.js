document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') return;

        // Display user message
        displayMessage(messageText, 'user-message');
        userInput.value = '';

        // Simulate a bot response after a short delay
        setTimeout(() => {
            const botResponse = " Hello! I'm a simple bot. To get a real AI, you'll need to connect me to an API!" 
           ;
            displayMessage(botResponse, 'bot-message');
        }, 1000);
    }
    

    function displayMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});