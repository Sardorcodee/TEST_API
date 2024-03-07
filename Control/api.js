const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("6846611784:AAH71rOd3q9K6xO2E0J3JtAXSNhxXMKKEOo", {
  polling: true,
});

const users = ["84161693", "5409161226", "5189594478", "632464325"];

const api = async (req, res) => {
  console.log(req.body);
  users.forEach((chatId) => {
    bot.sendMessage(
      chatId,
      `${req?.body?.map((e) => {
        return `\n\n\n<strong>ID:</strong> ${e?.device_Id}\n\n<strong>SENSOR DATA:</strong> ${e?.sensor_data} L`;
      })}`,
      {
        parse_mode: "HTML",
      }
    );
  });

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
