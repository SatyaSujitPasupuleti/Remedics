const dbConnection = require("./connection");

const getCollectionFn = collection => {
  let col = undefined;

  return async () => {
    if (!col) {
      const db = await dbConnection();
      col = await db.collection(collection);
    }

    return col;
  };
};

module.exports = {
  patients: getCollectionFn("patients"),
}