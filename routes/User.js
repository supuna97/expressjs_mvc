const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/", userController.get);
router.post("/create", userController.post);

module.exports = router;
