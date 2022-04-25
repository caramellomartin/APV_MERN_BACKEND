import express from 'express';
import { agregarPaciente, obtenerPacientes, obtenerPaciente, actualizarPaciente, eliminarPaciente } from '../controllers/pacienteController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

//Protegemos el post con checkAuth para verificar q tenga cuenta y guardar en la vriable interna de express el veterinario
router
    .route('/')
    .post(checkAuth, agregarPaciente)
    .get(checkAuth, obtenerPacientes);

router
    .route('/:id')
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente);

export default router;