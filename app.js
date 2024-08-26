const express = require('express');
const path = require('path');
const app = express();
const routes = require('./server/routes/route');

// Configuración del puerto y host
const config = {
    port: process.env.EXPRESS_PORT || 3000,
    host: process.env.EXPRESS_HOST || 'localhost',
    static: process.env.EXPRESS_STATIC || 'public'
};

// Middleware para servir archivos estáticos
app.use(express.static(config.static));

// Ruta principal para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(config.static, 'index.html'));
});

// Rutas adicionales
app.use('/api', routes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Error interno del servidor'
    });
});

// Iniciar el servidor
app.listen(config.port, config.host, () => {
    console.log(`http://${config.host}:${config.port}`);
});
