const express = require("express");
const morgan = require("morgan");
const path = require("path");
const japan = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/cities", async (req, res) => {
  try {
    const locations = await japan.select().table("cities");
    res.json(locations);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/tourism", async (req, res) => {
    try {
        const tourism = await japan.select().table("tourism");
        res.json(tourism);
    } catch (err) {
        console.error("Error loading toruism!", err);
        res.sendStatus(500);
    }
});

app.get("/api/cuisine", async (req, res) => {
    try {
        const cuisine = await japan.select().table("cuisine");
        res.json(cuisine);
    } catch (err) {
        console.error("Error loading cuisines!", err);
        res.sendStatus(500);
    }
});

app.get("/api/sport", async (req, res) => {
    try {
        const sport = await japan.select().table("sport");
        res.json(sport);
    } catch (err) {
        console.error("Error loading sport venues!", err);
        res.sendStatus(500);
    }
});

app.get("/api/shopping", async (req, res) => {
    try {
        const shopping = await japan.select().table("shopping");
        res.json(shopping);
    } catch (err) {
        console.error("Error loading shopping venues!", err);
        res.sendStatus(500);
    }
});

app.get("/api/nature", async (req, res) => {
    try {
        const nature = await japan.select().table("nature");
        res.json(nature);
    } catch (err) {
        console.error("Error loading natural sites!", err);
        res.sendStatus(500);
    }
});

app.get("/api/history", async (req, res) => {
    try {
        const history = await japan.select().table("history");
        res.json(history);
    } catch (err) {
        console.error("Error loading historical sites!", err);
        res.sendStatus(500);
    }
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;