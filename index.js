const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();
conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api/noticias', require('./routes/noticia'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
