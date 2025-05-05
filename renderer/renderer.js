const promptInput = document.getElementById('prompt');
const askBtn = document.getElementById('askBtn');
const chatWindow = document.getElementById('chat-window');

const messagesHistory = [];

askBtn.addEventListener('click', async () => {
  const prompt = promptInput.value.trim();
  if (!prompt) return;

  appendMessage(prompt, 'user');
  promptInput.value = '';
  scrollToBottom();

  const recentHistory = messagesHistory.slice(-5);

  const historyPrompt = recentHistory
    .map(m => `İstifadəçi: ${m.user}\n${m.bot}`)
    .join("\n\n");

  const fullPrompt = `${historyPrompt}

İstifadəçi: ${prompt}
Cavabın:`;

  const finalPrompt = `Sən intellektual və mehriban AI köməkçisən. Hər mesajı istifadəçinin dilində, aydın, texniki suallarda isə texniki və strukturlaşdırılmış şəkildə cavablandırırsan. Əvvəlki mesajlardan əlaqələr quraraq cavab ver. Aşağıdakı yazışmalar əsasında son cavabı ver:

${fullPrompt}`;

  try {
    const response = await window.api.askGemini(finalPrompt);
    messagesHistory.push({ user: prompt, bot: response });
    appendMessage(response, 'bot');
    scrollToBottom();
  } catch (err) {
    appendMessage("❌ Xəta baş verdi: " + err.message, 'bot');
  }
});

function appendMessage(text, type) {
  const div = document.createElement('div');
  div.className = type === 'user' ? 'user-msg' : 'bot-msg';
  div.innerHTML = marked.parse(text);
  chatWindow.appendChild(div);
  scrollToBottom();

  if (type === 'bot' && window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([div]);
  }
}

function scrollToBottom() {
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

promptInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    askBtn.click();
  }
});

