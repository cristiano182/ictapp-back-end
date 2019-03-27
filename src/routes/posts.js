const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

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
//////////////////////////// INSERIR NOVO POST
router.post("/posts", async (req, res) => {
  try {
    const { texto, campus } = req.body;
    const newPost = new Post({ texto, campus });
    await newPost.save();
    res.send(req.body);
  } catch (err) {
    res.send(err);
  }
});

//////////////////////// INSERIR COMENTARIO EM POST
router.put("/posts/:id", async (req, res) => {
  try {
    var obj = await Post.findByIdAndUpdate(req.params.id);
    obj.quantidade_comentarios++;
    obj.comentarios.push(req.body);
    await obj.save();
    res.send(obj);
  } catch (err) {
    res.send(err);
  }
});
///////////////////////////// ATUALIZAR LIKE
router.put("/posts/updatelike/:id", async (req, res) => {
  try {
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
    res.send(obj);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
