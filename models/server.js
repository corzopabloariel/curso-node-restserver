const express = require('express');
const cors = require('cors')

class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middleware
        this.middleware();
        // Rutas
        this.routes();

    }
    middleware() {

        // CORS
        this.app.use( cors() );

        // BODY
        this.app.use( express.json() );

        // Directorio público
        this.app.use( express.static('public') );

    }
    routes() {

        this.app.use(this.usuariosPath, require('../routes/user'));

    }
    listen() {

    this.app.listen(this.port, () => {

        console.log('Servidor corriendo en ', this.port);

    });

    }

}


module.exports = Server;