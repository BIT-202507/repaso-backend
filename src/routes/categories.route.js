import express from 'express';

import { createCategory } from '../controllers/category.controller.js';

const router = express.Router();

// Definir las rutas de esta entidad
router.post( '/', createCategory );

export default router;