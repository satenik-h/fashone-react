const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get("/", function (req, res) {
  res.send("Mail Server");
});

app.post("/api/sendmail", function (req, res) {
  console.log(req.body);
  const msg = {
    to: "sathenikhambarian@gmail.com",
    from: req.body.email,
    subject: req.body.name,
    text: req.body.socialmedia,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.send("email sent");
    })
    .catch((err) => {
      console.error(err.response.body);
    });
});

app.get("/", function (req, res) {
  res.send("Server is workgin");
});

app.listen(3030);
