// utliza express y debe cargarse en el teminal como npm install express
const { json } = require("express");
const express = require("express");
const app = express();
// se llama con el localhost:8000
const port = 8000;
// se emplea solo para post, push, delete, en el caso de get no se utiliza
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// pwermite que el servidor lea las carpetas estarticas de acceso publico
app.use(express.static(__dirname + "/public"));
// permite qie el servisdor acceda a las carpetas de vistas (views)
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

//accedemos al sistema de rutas definidos en la carpeta de rutas (servicio en este caso) 
app.use(require('./routes/servicios'));


// llamada con definicion de ruta e identifica la salida que puede ser un json res.json (nombre variable o constante definida como objeto o arreglo), un html res.send (deifinido como descripcion de html) o un archivo ejs res.render (nombre archivo, sin extension)





app.listen( port, () => console.log(`Listening on port: ${port}`) );