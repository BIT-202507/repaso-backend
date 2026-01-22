import express from 'express';

import categoriesRoute from './routes/categories.route.js';

const app = express();
const PORT = 3000;

// Definir la ruta principal a los routers
app.use( '/api/catetories', categoriesRoute );

// Lanzar servidor
app.listen( PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});