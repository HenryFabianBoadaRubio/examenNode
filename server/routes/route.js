const express = require('express');
const router = express.Router();

// Define tus rutas aquí
router.get('/example', (req, res) => {
    res.json({ message: 'Ruta de ejemplo' });
});

module.exports = router;
