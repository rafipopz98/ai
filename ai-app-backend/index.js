const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("dotenv");
const OpenAi = require("openai");
const { connectionDb } = require("./db");
const Joi = require("joi");
const User = require("./model/user");
const bcrypt = require("bcrypt");
const Save = require("./model/story");

const app = express();
connectionDb();
env.config();

app.use(cors());
app.use(bodyParser.json());

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

app.listen(8080, () => {
  console.log("server running");
});

// app.use(require("./router/auth"));

app.post("/", async (req, res) => {
  const { message } = await req.body;

  try {
    const completion = await openai.completions.create({
      model: "text-davinci-002",
      // prompt: `Compose a short, 500-word story about ${message} The story should have a clear beginning, middle, and end. Focus on a single, impactful event or decision that drives the narrative. Avoid unnecessary details or descriptions. Be succinct and to the point.`,
      // prompt: `Please craft a compelling short story that captivates the reader's imagination on the topic of ${message}. Feel free to choose any setting, characters, and themes, but make sure the story remains under 500 words. strictly under 500 words and complete the story no matter what and also add human emotions should be present."`,
      prompt: ` you are a great story teller,you craft flawless and engaging short story that captivates the reader's imagination,you compose stories about 500-600 words,you always make sure you finish the story in 500-600 words,strictly under 500-600words,${message}`,
      // prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });
    res.json({ message: completion.choices[0].text });
    console.log(completion.choices[0].text);
  } catch (error) {
    console.error("the error is ", error);
  }
});

// app.post("/register", async (req, res) => {
//   const { name, email, password } = await req.body;
//   try {
//     console.log("im here");
//     // await connectionDb();

//     console.log(name, email, password, "kkkekek");

//     const { error } = schema.validate({ name, email, password });

//     if (error) {
//       return { success: false, message: "fill everythingggg" };
//     }

//     console.log(email);

//     const isUserExist = await user.findOne({ email });

//     if (isUserExist) {
//       return { success: false, message: "email/username already exists" };
//     } else {
//       const newUser = await user.create({
//         name,
//         email,
//         password,
//       });

//       if (newUser) {
//         console.log(newUser, "new user detail here");
//         return { success: true, message: "registration successsfull" };
//       } else {
//         console.log("else");
//         console.log("something happend please try again ");
//         return;
//       }
//     }
//   } catch (e) {
//     console.log("errorr while registering user", e);
//     return;
//   }
// });

app.post("/register", async (req, res) => {
  // console.log(req.body);
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error(error);
  }
});

app.post("/Login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "no password or email" });
    }
    const auth = bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
});

app.post("/save", async (req, res) => {
  try {
    const { prompt, response, likes } = req.body;
    if (!prompt || !response || !likes) {
      return res.json({ message: "All fields are required" });
    }
    const saved = await Save.create({ prompt, response, likes });
    res
      .status(201)
      .json({ message: "successfully saved", success: true, saved });
  } catch (e) {
    console.log("errror while saving", e);
  }
});
