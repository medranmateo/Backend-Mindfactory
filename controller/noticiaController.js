const Noticia = require('../models/Noticia');

exports.crearNoticia = async (req, res) => {
    try {
        let nuevaNoticia;

        nuevaNoticia = new Noticia(req.body);

        await nuevaNoticia.save();
        res.status(201).json({ mensaje: 'Noticia creada exitosamente', noticia: nuevaNoticia });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al crear la noticia', error: error.message });
    }
}

exports.obtenerNoticias = async (req, res) => {
    try {
        const noticias = await Noticia.find();
        res.status(200).json(noticias);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener las noticias', error: error.message });
    }
}

exports.obtenerNoticiaPorId = async (req, res) => {
    try {
        const noticia = await Noticia.findById(req.params.id);
        if (!noticia) {
            return res.status(404).json({ mensaje: 'Noticia no encontrada' });
        }
        res.status(200).json(noticia);
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: 'Error al obtener la noticia', error: error.message });
    }
}

exports.obtenerNoticiasPorCategoria = async (req, res) => {
    try {
        const categoria = req.params.categoria;

        const noticias = await Noticia.find({ categoria });

        if (!noticias || noticias.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron noticias para esta categoría' });
        }

        res.status(200).json(noticias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener noticias por categoría', error: error.message });
    }
};

exports.actualizarNoticia = async (req, res) => {
    try {
        const noticiaActualizada = await Noticia.findByIdAndUpdate  (req.params.id, req.body, { new: true });
        if (!noticiaActualizada) {
            return res.status(404).json({ mensaje: 'Noticia no encontrada' });
        }
        res.status(200).json({ mensaje: 'Noticia actualizada exitosamente', noticia: noticiaActualizada });
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: 'Error al actualizar la noticia', error: error.message });
    }
}

exports.eliminarNoticia = async (req, res) => {
    try {
        const noticiaEliminada = await Noticia.findByIdAndDelete(req.params.id);
        if (!noticiaEliminada) {
            return res.status(404).json({ mensaje: 'Noticia no encontrada' });
        }
        res.status(200).json({ mensaje: 'Noticia eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: 'Error al eliminar la noticia', error: error.message });
    }
}