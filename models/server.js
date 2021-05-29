const express = require('express');
var cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath='/api/usuarios';

        //MiddleWares
        this.middlewares();

        //Rutas de mi aplicacion 
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y Parseo del Body
        this.app.use(express.json());

        //Direcctorio Publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el Puerto: ', this.port);
        });
    }


}

module.exports = Server;