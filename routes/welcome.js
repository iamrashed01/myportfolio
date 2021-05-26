const router = require("express").Router();
const Visitor = require("../models/visitor");

router.post("/", async (req, res) => {
  var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
  const newVisitor = await Visitor({
    ip,
  });
  try {
    await newVisitor.save();
    return res.send("welcome" + ip);
  } catch (err) {
    return res.send("welcome again" + ip);
  }
});

module.exports = router;
