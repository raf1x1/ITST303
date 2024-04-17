import express from "express";
import bodyParser from "body-parser";
import {
  PastTenseConverter,
  PresentTenseConverter,
  FutureTenseConverter,
  NegativeFormConverter,
} from "./sentenceConverter.js";

const app = express();
const port = 3000;

let data = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index.ejs", { pastTense: data });
});

app.post("/convert-sentence", (req, res) => {
  const userInput = req.body.sentence;
  const conversionType = req.body.conversionType;

  // Convert sentence using SentenceConverter class [past, present, negative]

  let converter;

  switch (conversionType) {
    case "past":
      converter = new PastTenseConverter();
      break;
    case "present":
      converter = new PresentTenseConverter();
      break;
    case "future":
      converter = new FutureTenseConverter();
      break;
    case "negative":
      converter = new NegativeFormConverter();
      break;
    default:
      converter = new PastTenseConverter();
  }

  converter.convert(userInput);
  data = converter.getResult();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
