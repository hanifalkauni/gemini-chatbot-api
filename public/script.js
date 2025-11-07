const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  input.value = '';

  const thinkingMessage = appendMessage('bot', 'Gemini is thinking...');

  // Send user message to the server
  fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages: [{ role: 'user', text: userMessage }] }),
  })
  .then(response => response.json())
  .then(data => {
    if (data && data.result) {
      // Sanitize and render markdown
      const sanitizedHtml = DOMPurify.sanitize(marked.parse(data.result));
      // Replace "Thinking..." message with the actual response
      thinkingMessage.innerHTML = sanitizedHtml;
    } else {
      // Handle the case where the response is empty or doesn't have the expected format
      thinkingMessage.textContent = 'Sorry, no response received.';
    }
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
    thinkingMessage.textContent = 'Failed to get response from server.';
  });
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  if (sender === 'user') {
    msg.textContent = text;
  } else {
    msg.innerHTML = text; // Use innerHTML for bot to render thinking message and formatted response
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg; // Return the message element so its content can be modified later
}
