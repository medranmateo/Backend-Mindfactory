// Rutas para manejar las noticias
const express = require('express');
const router = express.Router();
const noticiaController = require('../controller/noticiaController');

router.post('/', noticiaController.crearNoticia);
router.get('/', noticiaController.obtenerNoticias);
router.get('/:id', noticiaController.obtenerNoticiaPorId);
router.put('/:id', noticiaController.actualizarNoticia);
router.delete('/:id', noticiaController.eliminarNoticia);

module.exports = router;
