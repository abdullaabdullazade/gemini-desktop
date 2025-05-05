# 💬 Gemini-powered Chat Interface (Vanilla JS)

This is a lightweight, customizable chat interface powered by Gemini API. It supports dynamic history-based prompts and intelligent response formatting with Markdown and LaTeX rendering.

---

## 🚀 Features

- 💡 **Smart Prompting**: Includes the last 5 user-bot messages to generate context-aware answers.
- 🧠 **Natural Conversation Flow**: Avoids robotic formatting like "Bot:" in responses, resulting in a human-like dialogue.
- 🌐 **Language-Aware**: Responses are automatically tailored to the language of the user message (supports Azerbaijani, English, and others).
- 🧾 **Markdown & LaTeX Support**: User and bot messages are rendered using `marked.js` and `MathJax`.
- ↩️ **Enter Key Submission**: Press Enter to send message, Shift+Enter for new line.

---

## 🛠️ Tech Stack

- HTML / CSS
- Vanilla JavaScript
- [Gemini API](https://ai.google.dev/)
- [Marked.js](https://github.com/markedjs/marked)
- [MathJax](https://www.mathjax.org/) (optional for LaTeX)

---

## 📦 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gemini-chat-app.git
   cd gemini-chat-app
   npm i
   npm start
    ```

Then wrapped with this instruction:

> You are a smart and friendly AI assistant. Respond in the user's language. If the user asks technical questions, be precise and structured. Otherwise, be concise, kind, and natural.

