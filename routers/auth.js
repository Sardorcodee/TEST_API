const { Router } = require("express");
const { register, login } = require("../Control/auth.js");
const { api, get_api, website } = require("../Control/api.js");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/api", api);
router.get("/get_api", get_api);
router.get("/", website);

module.exports = router;
