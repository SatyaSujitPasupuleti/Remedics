const mongo = require("mongodb").MongoClient;

let con = undefined;
let db = undefined;

let mongocfg = {
    "serverUrl":"mongodb://localhost:27017",
    "database":"remedics"
}

module.exports = async () => {
  if (!con) {
    con = await mongo.connect(mongocfg.serverUrl);
    db = await con.db(mongocfg.database);
  }
   return db;
}