const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getUsers);

router.post(
  "/addUsersScript",
  userController.addUserScript
);
router.get("/:email", userController.getUserByEmail);

module.exports = router;
