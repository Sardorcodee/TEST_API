const api = async (req, res) => {
  console.log(req.body);

  res.send({ msg: "OK!" });
};

const get_api = async (req, res) => {
  const { username, email, password } = req.body;

  res.send({ msg: "OK!" });
};

const website = (req, res) => {
  res.sendFile(__dirname + "/inner.html");
};

module.exports = {
  api,
  get_api,
  website,
};
