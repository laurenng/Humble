/**
 * Name: Lauren Ng
 * Date: 11/13/2019
 * Section: CSE 154 AE Andrew Wolfram
 *
 * This is the JS file used to set APIs for the explore SF website.
 * It identifies and creates API utilized in index.js
 */
"use strict";

const express = require("express");
const fs = require('fs').promises;
const multer = require("multer");
const app = express();

app.use(express.static("public"));

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// for parsing application/json
app.use(express.json());

// for parsing multipart/form-data
app.use(multer().none());

const ERROR_MESSAGE = 400;
const LOCAL_HOST = 9000;

/**
 * gets data from JSON object to give a simplified list of attributes regarding
 * the attraction. place must be valid, otherwise will return an error message
 * @param {string} place - attraction Name
 * @return {object} jsonData[choice] - list of attributes for attraction
 */
app.get("/places/list", async function(req, res) {
  try {
    let jsonData = await fs.readFile("file.json", "utf-8");
    jsonData = JSON.parse(jsonData);
    res.type("json").send(jsonData);
  } catch (err) {
    res.type("text");
    res.status(ERROR_MESSAGE).send("not working... sorry!!!");
  }
});

const PORT = process.env.PORT || LOCAL_HOST;
app.listen(PORT);
