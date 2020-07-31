module.exports = (url, dbName) => {
  const { ObjectId, MongoClient } = require("mongodb");
  let db;
  MongoClient.connect(url, (err, client) => {
    if (err) process.exit(1);
    console.log("Connecte successfuly to DB");
    db = client.db(dbName);
    // client.close();
    // console.log(db);
  });
  return (collection) => ({
    insert: (data) => {
      return new Promise((resolve, reject) => {
        db.collection(collection).insertOne(data, (error, result) => {
          resolve(result);
        });
      });
      // return ObjectId();
    },
  });
};
