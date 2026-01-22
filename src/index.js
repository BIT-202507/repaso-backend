import express from 'express';

import dbConexion from './config/mongo.config.js';
import categoriesRoute from './routes/categories.route.js';

const app = express();
const PORT = 3000;

// Invoca la conexion a la base de datos
dbConexion();

// Definir la ruta principal a los routers
app.use( '/api/catetories', categoriesRoute );

// Lanzar servidor
app.listen( PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});