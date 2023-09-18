const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("dotenv");
const OpenAi = require("openai");

const app = express();

env.config();

app.use(cors());
app.use(bodyParser.json());

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

app.listen(8080, () => {
  console.log("server running");
});

app.post("/chat", async (req, res) => {
  const { message } = await req.body;

  try {
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `Compose a short, 500-word story about ${message} The story should have a clear beginning, middle, and end. Focus on a single, impactful event or decision that drives the narrative. Avoid unnecessary details or descriptions. Be succinct and to the point.
      `,
      max_tokens: 1200,
    });
    res.send(completion.choices[0].text);
    console.log(completion.choices[0].text);
  } catch (error) {
    console.error("the error is ", error);
  }
  // This code checks if completion and its nes
  // ted properties are defined before attempting to access them. If any of them are undefined, it will handle the error gracefully and print an error message. Make sure you have replaced 'your-api-key' with your actual OpenAI API key as well.
});
