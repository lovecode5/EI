const express = require("express");
const router = express.Router();
const controllerFunctions=require("../CONTROLLER/controller")

router.post("/register", controllerFunctions.registerUser );
router.post("/login", controllerFunctions.loginUser );
router.get("/profile", controllerFunctions.userProfile);



module.exports.router = router;