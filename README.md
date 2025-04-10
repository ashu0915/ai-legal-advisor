# ⚖️ AI Legal Advisor

An AI-powered legal advisor web application built with Node.js and Google's Gemini Pro API. Users can ask legal questions and get AI-generated responses. The system is designed to support future integration with RAG (Retrieval-Augmented Generation) for more reliable, document-backed answers.

---

## 🚀 Features

- ✍️ Ask legal questions in natural language
- 🤖 Gemini Pro integration for high-quality responses
- 🗂️ (Optional) Future RAG integration with uploaded legal documents
- 📁 Simple REST API backend
- 🌐 EJS-based frontend (optional)
- 🔐 Secure setup with `.env` support

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **AI Model**: Gemini Pro (Google Generative AI)
- **Frontend**: HTML/CSS + EJS (or any frontend you like)
- **File Storage**: Local (can be upgraded to Cloud Storage)
- **RAG (Planned)**: Chroma / FAISS + sentence-transformers

---

## 📦 Installation

```bash
git clone https://github.com/<your-username>/ai-legal-advisor.git
cd ai-legal-advisor/backend
npm install
