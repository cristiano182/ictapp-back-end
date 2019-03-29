const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const JWT_KEY = "my_secret_key";

///////////////////////////////    LISTAR POSTS
router.get("/posts/:skip", async (req, res) => {
  try {
    let skip = parseInt(req.params.skip);
    const posts = await Post.find()
      .sort({ date: "desc" })
      .skip(skip)
      .limit(5);
    res.send(posts);
  } catch (err) {
    res.send(err);
  }
});
/////////////////////////////////// DELETER POST
router.post("/posts/delete", async (req, res) => {
  try {
    const { post_id } = req.body;
    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });
    if (user) {
      if (user.role === 1) {
        await Post.findByIdAndRemove(post_id);
      }
      res.sendStatus(200);
    } else {
      res.sendStatus(200);
    }
  } catch (err) {
    res.send(err);
  }
});
//////////////////////////// INSERIR NOVO POST
router.post("/posts", async (req, res) => {
  try {
    const { texto, campus, autor } = req.body;
    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });
    if (user) {
      const newPost = new Post({ texto, campus, autor });
      await newPost.save();
    }
    res.sendStatus(200);
  } catch (err) {
    res.send(err);
  }
});

//////////////////////// INSERIR COMENTARIO EM POST
router.put("/posts/:id", async (req, res) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });
    if (user) {
      var obj = await Post.findByIdAndUpdate(req.params.id);
      obj.quantidade_comentarios++;
      obj.comentarios.push(req.body);
      await obj.save();
    }
    res.sendStatus(200);
  } catch (err) {
    res.send(err);
  }
});
///////////////////////////// ATUALIZAR LIKE
router.put("/posts/updatelike/:id", async (req, res) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });
    if (user) {
      let obj = await Post.findByIdAndUpdate(req.params.id);
      await obj.comentarios.map(comentario => {
        if (comentario._id == req.body.comentario_id) {
          var avanca = comentario.like.users.find(
            obj => obj.id === req.body.user_id
          );

          if (!avanca) {
            comentario.like.quantidade++;
            comentario.like.users.push({ id: req.body.user_id });
          }
        }
      });
      await obj.save();
    }

    res.sendStatus(200);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
