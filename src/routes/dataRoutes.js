const express = require('express');
const router = express.Router();
const { createData } = require('../controllers/dataController');

// Ruta para crear un usuario
router.post('/data', createData);

module.exports = router;