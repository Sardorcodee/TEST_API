const { Router } = require("express");
const { List, NewCom, UserComment } = require("../Control/Comment.js");
const router = Router();

router.get("/CommentList", List);
router.get("/UserComment", UserComment);
router.post("/NewComment", NewCom);
router.get("/g", (req, res) => {
  res.sendFile(__dirname + "/inner.html");
});

module.exports = router;
