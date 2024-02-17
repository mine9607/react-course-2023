import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/places", async (req, res) => {
  // ----------------Option 1------------------
  // const fileContent = await fs.readFile('./data/places.json');
  // const placesData = JSON.parse(fileContent);
  // res.status(200).json({ places: placesData });
  // ----------------Option 2------------------
  // const response = await fs.readFile("./data/places.json");
  // const data = JSON.parse(response);
  // res.status(200).json({ places: data.places });
  // ----------------Option 3------------------
  // fs.readFile("./data/places.json")
  //   .then((fileContent) => {
  //     const placesData = JSON.parse(fileContent);
  //     res.status(200).json({ places: placesData });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // ----------------Option 4------------------
  try {
    const fileContent = await fs.readFile("./data/places.json");
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

app.get("/user-places", async (req, res) => {
  const fileContent = await fs.readFile("./data/user-places.json");

  const places = JSON.parse(fileContent);

  res.status(200).json({ places });
});

app.put("/user-places", async (req, res) => {
  const places = req.body.places;

  await fs.writeFile("./data/user-places.json", JSON.stringify(places));

  res.status(200).json({ message: "User places updated!" });
});

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3000);
