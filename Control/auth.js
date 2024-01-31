const uuid = require("uuid");
const tk = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { write_file, read_file } = require("../fs/fs_api.js");

let users = read_file("users.json");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  let foundedUser = users.find((user) => user.email === email);

  if (foundedUser)
    return res.status(400).send(
      JSON.stringify({
        msg: "User already exists!!",
      })
    );
  let user = {
    id: uuid.v4(),
    username,
    email,
    password: await bcrypt.hash(password, 8),
  };
  users.push(user);
  write_file("users.json", users);
  res.send({ msg: "Register User" });
};
const login = async (req, res) => {
  const { supername, password } = req.body;

  let foundedUser = users.find(
    (user) => user.username === supername || user.email === supername
  );

  if (!foundedUser) return res.status(404).send({ msg: "User topilmadi!" });

  let password2 = await bcrypt.compare(password, foundedUser.password);
  if (!password2) {
    return res.status(401).send({ msg: "Parol Xato!" });
  }
  let token = await tk.sign({ id: foundedUser.id }, process.env.API_KEY, {
    expiresIn: "1d",
  });
 return res.status(200).send({token})
};

module.exports = {
  register,
  login,
};
