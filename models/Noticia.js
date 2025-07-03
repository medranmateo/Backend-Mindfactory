const mongoose = require('mongoose');

const NoticiaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    subtitulo: { type: String, required: true },
    imagenUrl: { type: String, required: true },
    contenido: { type: String, required: true },
    autor: { type: String, required: true },
    categoria: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Noticia', NoticiaSchema);
