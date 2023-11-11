const { EnterData, EnterData2, datafind2 } = require("../callback/callback");
const { datafind, Search } = require("../callback/callback");
const allcomponet = require("express").Router();

allcomponet.post("/enterdata", EnterData);

allcomponet.get("/datafind", datafind);
allcomponet.get("/search", Search);

allcomponet.post("/enterdata2", EnterData2);
allcomponet.get("/datafind2", datafind2);

module.exports = allcomponet;
