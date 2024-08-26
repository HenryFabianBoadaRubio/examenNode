// Archivo: routes.js

const express = require('express');
const router = express.Router();



const { encrypt, decrypt } = require('./encryptionUtils');

router.post('/encrypt', (req, res) => {
  try {
    const { text } = req.body;
    const encryptedText = encrypt(text);
    res.json({ result: encryptedText });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/decrypt', (req, res) => {
  try {
    const { text } = req.body;
    const decryptedText = decrypt(text);
    res.json({ result: decryptedText });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;