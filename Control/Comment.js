const uuid = require("uuid");
const tk = require("jsonwebtoken");
const { write_file, read_file } = require("../fs/fs_api.js");

let Comment = read_file("Comments.json");

const List = async (req, res) => {
  const { token } = req.headers;
  let token2 = await tk.verify(token, process.env.API_KEY);
  if (!token2.id) {
    return res.status(404).send({ msg: "Token invalid!" });
  }

  return res.send(Comment);
};
const NewCom = async (req, res) => {
  const { title, hashtag } = req.body;
  const { token } = req.headers;
  let token2 = await tk.verify(token, process.env.API_KEY);
  if (!token2.id) {
    return res.status(404).send({ msg: "Token invalid!" });
  }
  let comment = {
    id: uuid.v4(),
    title,
    hashtag,
    user_id: token2.id,
  };
  Comment.push(comment);
  write_file("Comments.json", Comment);
  res.send({ msg: "Comment yuklandi!" });
};
const UserComment = async (req, res) => {
  const { token } = req.headers;
  let token2 = tk.verify(token, process.env.API_KEY);
  let Comments = Comment.filter((c) => c.user_id === token2.id);
  if (Comments) {
    return res.send(Comments);
  }
  return res.send({ msg: "Nimadir xato ketdi!" });
};
module.exports = {
  List,
  NewCom,
  UserComment,
};
