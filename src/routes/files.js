const express = require("express");
const router = express.Router();
const Files = require("../models/Files");

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
///////////////// ADD NOVA UC
router.post("/files", async (req, res) => {
  const { name, info } = req.body;
  const newFiles = new Files({ name, info });
  await newFiles.save();
  res.send(req.body);
});

router.post("/teste", async (req, res) => {
  const obj = req.body;
  res.send(obj);
  console.log(obj);
});

module.exports = router;
