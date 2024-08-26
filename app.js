const express = require('express');
const path = require('path');
const app = express();
const routes = require('./server/routes/route');


const config = {
    port: process.env.EXPRESS_PORT || 3001,
    host: process.env.EXPRESS_HOST || 'localhost',
    static: process.env.EXPRESS_STATIC || 'public'
};

app.use(express.json()); // Añadido para parsear JSON

// Middleware para servir archivos estáticos
app.use(express.static(config.static));


app.use('/api', routes);

// Ruta principal para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(config.static, 'index.html'));
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error('Error detallado:', err);
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Error interno del servidor'
    });
});


app.listen(config.port, config.host, () => {
    console.log(`http://${config.host}:${config.port}`);
});