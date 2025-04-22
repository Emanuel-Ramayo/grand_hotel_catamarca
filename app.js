const express = require('express');
const path = require('path');


const app = express();

// 👉 Requerir tus rutas
const indexRouter = require('./routes/index');
const contactoRouter = require('./routes/contacto');
const habitacion1Router = require('./routes/habitacion1');
const habitacion2Router = require('./routes/habitacion2');
const habitacion3Router = require('./routes/habitacion3');
const habitacion4Router = require('./routes/habitacion4');
const serviciosRouter = require('./routes/servicios');

// 👉 Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 👉 Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 👉 Hacer que los archivos estáticos estén disponibles (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// 👉 Montar las rutas
app.use('/', indexRouter);
app.use('/contacto', contactoRouter);
app.use('/habitacion-simple', habitacion1Router);
app.use('/habitacion-doble', habitacion2Router);
app.use('/habitacion-triple', habitacion3Router);
app.use('/habitacion-familiar', habitacion4Router);
app.use('/servicios', serviciosRouter);

// 👉 Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
