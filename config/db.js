const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'} );

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_Mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
        process.exit(1);
    }
}

module.exports = conectarDB;
