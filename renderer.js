// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { getChatGPTRequest } = require('./chatgpt-client');

const sendButton = document.querySelector('#send');
const cleanButton = document.querySelector('#clean');
const text = document.querySelector('#input');

// Add on enter event listener to text
text.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        makeChatGPTRequest(document.querySelector('#input').value);
    }
});

cleanButton.addEventListener('click', (e) => {
    const responsesHolder = document.querySelector('#responses-holder');
    const responsesSpam = document.createElement('span');
    responsesSpam.textContent = 'Responses';
    responsesHolder.innerHTML = '';
    responsesHolder.appendChild(responsesSpam)

})

sendButton.addEventListener('click', (e) => {
    makeChatGPTRequest(document.querySelector('#input').value);
});

const makeChatGPTRequest = (question) => {
    getChatGPTRequest(question);
}