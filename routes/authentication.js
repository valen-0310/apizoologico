const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

router.post('/signup', async (req, res) => {
    const { usuario, correo, contrasena } = req.body;
    const user = new userSchema({
        usuario: usuario,
        correo: correo,
        contrasena: contrasena
    });
    user.contrasena = await user.encryptClave(user.contrasena);
    await user.save();
    res.json(user);
});

module.exports = router;
