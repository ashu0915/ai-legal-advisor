const express = require('express');
const router = express.Router();
const askLegalQuestion = require('../services/geminiServices');

router.post('/ask', async (req, res) => {
    console.log("here3");
    try {
      const { question } = req.body;
      console.log("here5");
      const answer = await askLegalQuestion(question);
      console.log("here6");
      res.json({ answer });
    } catch (err) {
        console.log("here4");
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;