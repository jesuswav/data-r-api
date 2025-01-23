const Data = require('../models/dataModel');

exports.createData = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new Data({ name, email, age });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado con éxito', data: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};