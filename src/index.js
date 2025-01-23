const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/dataRoutes');

// Configurar dotenv
dotenv.config();

// Conectar a MongoDB
connectDB();

// Crear la aplicación Express
const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', userRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});