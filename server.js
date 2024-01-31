const express = require("express");
const dotenv = require("dotenv");
const auth = require("./routers/auth.js");
const UserComment = require("./routers/UserComment.js");
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(auth);
app.use(UserComment);

app.get("/", (req, res) => {
  console.log(5);
});

app.listen(port, () => {
  console.log(port + "chi ishga tushdi!");
});
