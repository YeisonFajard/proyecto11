const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controladores/controladorUsuario');
const middlewareAutenticacion = require('../middleware/middlewareAutenticacion')


router.post('/', controladorUsuario.registrarUsuario);
router.post('/', controladorUsuario.iniciarSesion);
router.get('/perfil', middlewareAutenticacion, controladorUsuario.obtenerPerfilUsuario)


module.exports = router;
