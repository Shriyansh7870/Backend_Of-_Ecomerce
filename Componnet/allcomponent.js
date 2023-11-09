const { EnterData } = require("../callback/callback");
const { datafind } = require("../callback/callback");
const allcomponet = require("express").Router();

allcomponet.post("/enterdata", EnterData);

allcomponet.get("/datafind", datafind);

module.exports = allcomponet;
