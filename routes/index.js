var express = require("express");
var router = express.Router();
const mu = require("../db/MongoUtils.js");

/* Comentario Juan Felipe Torres: así como mandan status 200, en el catch podrían mandar otros codigos de error dado cada caso,
   podrían guardar en constantes los codigos y usarlos en todo el código dependiendo de cada caso:
   const UNAUTHORIZED_CODE = 401;
   const BAD_REQUEST_CODE = 400;
   const INTERNAL_SERVER_ERROR_CODE = 500;
   const OK_STATUS_CODE = 200;
   */

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { user: req.user });
});

router.get("/getAllFavorsHelpee/:id", function (req, res) {
  console.log("favorsHelpee");
  mu.getAllFavorsHelpee(req.params.id)
    .then((favors) => {
      return res.json(favors);
    })
    .catch((err) => console.log(err));
});

router.get("/getAllFavorsHelper/:id", function (req, res) {
  mu.getAllFavorsHelper(req.params.id)
    .then((favors) => {
      return res.json(favors);
    })
    .catch((err) => console.log(err));
});

router.get("/getAllFavors", function (req, res) {
  mu.getAllFavors()
    .then((favors) => {
      return res.json(favors);
    })
    .catch((err) => console.log(err));
});

router.get("/getAllAvailableFavors", function (req, res) {
  mu.getAllAvailableFavors()
    .then((favors) => {
      return res.json(favors);
    })
    .catch((err) => console.log(err));
});

router.post("/newFavor", (req, res) => {
  let favor = req.body;
  mu.newFavor(favor)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

router.post("/setHelper", (req, res) => {
  const ObjectId = require("mongodb").ObjectId;
  const id = new ObjectId(req.body.id);
  const helperId = req.body.helperId;
  mu.setHelper(id, helperId)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

router.post("/markDone", (req, res) => {
  const ObjectId = require("mongodb").ObjectId;
  const id = new ObjectId(req.body.id);
  console.log(id);
  mu.markAsDone(id)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

router.post("/helperCancel", (req, res) => {
  const ObjectId = require("mongodb").ObjectId;
  const id = new ObjectId(req.body.id);
  mu.helperCancel(id)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

module.exports = router;
