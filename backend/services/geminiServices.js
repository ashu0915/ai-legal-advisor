const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function askLegalQuestion(question) {
    console.log("here");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  const result = await model.generateContent(question);
  const response = await result.response;
  return response.text();
}

module.exports = askLegalQuestion;