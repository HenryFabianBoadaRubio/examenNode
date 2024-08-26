// Archivo: routes.js

const express = require('express');
const router = express.Router();
const { encrypt, decrypt } = require('./encryptionUtils');

router.post('/encrypt', (req, res) => {
    const { text } = req.body;
    const encryptedText = encrypt(text);
    res.json({ result: encryptedText });
});

router.post('/decrypt', (req, res) => {
    const { text } = req.body;
    const decryptedText = decrypt(text);
    res.json({ result: decryptedText });
});

module.exports = router;