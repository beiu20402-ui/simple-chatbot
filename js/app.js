const messages = document.getElementById('messages');

function addMessage(text, sender) {

  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add(sender);

  div.innerText = text;

  messages.appendChild(div);

  messages.scrollTop = messages.scrollHeight;
}

async function sendMessage() {

  const prompt = document.getElementById('prompt');

  const text = prompt.value.trim();

  if (!text) return;

  addMessage(text, 'user');

  prompt.value = '';

  addMessage('Đang suy nghĩ...', 'bot');

    }
