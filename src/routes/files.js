const express = require("express");
const router = express.Router();
const Files = require("../models/Files");
const jwt = require("jsonwebtoken");
const JWT_KEY = "my_secret_key";
const User = require("../models/User");

//////////////////// GET ALL UCS
router.get("/files/:skip", async (req, res) => {
  try {
    let skip = parseInt(req.params.skip);
    const files = await Files.find()
      .sort({ info: "desc" })
      .skip(skip)
      .limit(20);
    res.send(files);
  } catch (err) {
    res.send(err);
  }
});
///////////////////// ADD INFO DE UC
router.put("/files/:id", async (req, res) => {
  try {
    const newInfo = req.body;
    const obj = await Files.findById(req.params.id);
    obj.info.push(newInfo);
    await obj.save();
    res.send(obj.info);
  } catch (err) {
    res.send(err);
  }
});
/////////////////////////// DELETAR UMA INFO
router.post("/files/delete", async (req, res) => {
  try {
    const { uc_id, info_id } = req.body;
    let token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({ userID: decoded.userID });
    if (user) {
      if(user.role === 1){
      let obj = await Files.findById(uc_id);
      let newArray = await obj.info.filter(p => p._id != info_id);
      obj.info = newArray;
      await obj.save();
      }
      res.sendStatus(200);
    } else {
      res.sendStatus(200);
    }
  } catch (err) {
    res.send(err);
  }
});

///////////////// ADD NOVA UC
/*
router.post("/files", async (req, res) => {
try {
  const { name, info } = req.body;
  const newFiles = new Files({ name, info });
  await newFiles.save();
  res.send(req.body);
} catch (err) {
  res.send(err)
}
});*/

module.exports = router;
