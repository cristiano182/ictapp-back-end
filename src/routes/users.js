const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const JWT_KEY = "my_secret_key";

router.post("/users/login", async (req, res) => {
  try {
    const { userID } = req.body;
    const user = await User.findOne({ userID: userID });
    if (user) {
      let tokenData = {
        userID: user.userID
      };
      let generatedToken = jwt.sign(tokenData, JWT_KEY, { expiresIn: "60m" });
      res.send(generatedToken);
    } else {
      res.send(null);
    }
  } catch (err) { 
    res.send(err);
  }
});

/////////////////////// GET USER BY ID
router.get("/users", async (req, res) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });
    if (user) {
      res.send(user);
    } else {
      res.send(null);
    }
  } catch (err) {
    res.send(err);
  }
});

//////////////////////////////    VERIFICAR VALIDADE TOKEN
router.get("/users/verifytoken", (req, res) => {
  if (req.headers["authorization"]) {
    let token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, JWT_KEY, (err, decode) => {
      if (!err) {
        res.send(true);
      } else {
        res.send(false);
      }
    });
  } else res.send(false);
});

/////////////////////////// REGISTRAR USUARIO
router.post("/users", async (req, res) => {
  try {
    const {
      email,
      name,
      userID,
      foto,
      curso,
      cargaHoraria,
      cargaHorariaComplementar,
      cursoName
    } = req.body;
    const user = await User.findOne({ userID: userID });
    if (!user) {
      const newUser = new User({
        email,
        name,
        userID,
        foto,
        curso,
        cargaHoraria,
        cargaHorariaComplementar,
        cursoName
      });
      await newUser.save();
      res.sendStatus(200);
    } else {
      res.send("Usuario Já Registrado");
    }
  } catch (err) {
    res.send(err);
  }
});

///////////////////////////////////// ATUALIZAR RANK DE CONTRIBUICOES DO USUARIO
router.put("/users/updaterank", async (req, res) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });

    if (user) {
      user.rank++;
      await user.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(200);
    }
  } catch (err) {
    res.send(err);
  }
});
//////////////////////////////////// DEVOLVER USUARIO COM MAIOR CONTRIBUICAO
/*
router.get("/users/rank/", async (req, res) => {
  try {
    console.log('ola')
    const users = await User.find().sort({rank: 'desc'})
    res.send(users);
       
  } catch (err) {
    res.send(err);
  }
});*/

/////////////////////// GET BY ID  ATUALIZAR DISCIPLINAS CURSADAS DO USUARIO
router.put("/users/updatedata", async (req, res) => {
  try {
    const { disciplinasCursadas, horas, horasComplementares } = req.body;

    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });

    if (user) {
      user.disciplinasCursadas = disciplinasCursadas;
      user.horas = horas;
      user.horasComplementares = horasComplementares;
      await user.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(200);
    }
  } catch (err) {
    res.send(err);
  }
});

//////////////////// ATUALIZAR CURSO DO USUARIO
router.put("/users/updatecurso", async (req, res) => {
  try {
    const { newCurso } = req.body;

    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });

    if (user) {
      user.disciplinasCursadas = [];
      user.horas = 0;
      user.horasComplementares = 0;

      if (newCurso === "ENGENHARIA BIOMEDICA") {
        user.curso = "required_EB";
        user.cargaHoraria = 2628;
        user.cursoName = "Engenharia Biomedica";
        user.cargaHorariaComplementar = 108;
      } else if (newCurso === "INTERDISCIPLINAR CIÊNCIA E TECNOLOGIA") {
        user.curso = "required_BCT";
        user.cargaHoraria = 468;
        user.cursoName = "Interdisciplinar Ciência e Tecnologia";
        user.cargaHorariaComplementar = 420;
      } else if (newCurso === "BACHARELADO BIOTECNOLOGIA") {
        user.curso = "required_BBT";
        user.cursoName = "Bacharelado Biotecnologia";
        user.cargaHoraria = 2196;
        user.cargaHorariaComplementar = 108;
      } else if (newCurso === "BACHARELADO CIÊNCIA DA COMPUTAÇÃO") {
        user.curso = "required_BCC";
        user.cursoName = "Bacharelado Ciência da Computação";
        user.cargaHoraria = 2196;
        user.cargaHorariaComplementar = 144;
      } else if (newCurso === "BACHARELADO MATEMATICA COMPUTACIONAL") {
        user.curso = "required_BMC";
        user.cursoName = "Bacharelado Matematica Computacional";
        user.cargaHoraria = 2196;
        user.cargaHorariaComplementar = 72;
      } else if (newCurso === "ENGENHARIA DE MATERIAIS") {
        user.curso = "required_EM";
        user.cursoName = "Engenharia de Materiais";
        user.cargaHoraria = 3204;
        user.cargaHorariaComplementar = 108;
      } else if (newCurso === "ENGENHARIA DA COMPUTAÇÃO") {
        user.curso = "required_EC";
        user.cursoName = "Engenharia de Computação";
        user.cargaHoraria = 3096;
        user.cargaHorariaComplementar = 108;
      }

      await user.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(200);
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
