const express = require("express");
const path = require("path");
const japan = require("../knex");
// import axios from "axios";
const axios = require("axios");

(async function getMarkers() {
    const { data: locations } = await axios.get("/api/tourism"); // ES6 destructuring & aliasing
    console.log(locations)
  })();