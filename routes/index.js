var express = require("express");
var router = express.Router();
const mu = require("../db/MongoUtils.js");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { user: req.user });
});

router.get("/getAllFavors", function (req, res) {
  console.log("favors");
  mu.getAllFavors()
    .then((favors) => {
      return res.json(favors);
    })
    .catch((err) => console.log(err));
});

router.post("/newFavor", (req, res) => {
  let favor = req.body;
  console.log("in");
  mu.newFavor(favor)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

router.post("/setHelper", (req, res) => {
  let ObjectId = require("mongodb").ObjectId;
  let id = new ObjectId(req.body.id);
  let helperId = req.body.helperId;
  console.log("in");
  mu.setHelper(id, helperId)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

module.exports = router;
