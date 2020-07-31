const express = require("express");
const container = require("../loader");
const router = express.Router();

router.get("/hola", async (req, res, next) => {
  const result = await container.cradle.db.insert({ hola: "bye" });
  res.send(result);
});

module.exports = router;
