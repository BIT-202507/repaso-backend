import express from 'express';

const app = express();
const PORT = 3000;

// Lanzar servidor
app.listen( PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});