const MongoClient = require("mongodb").MongoClient;

//Connect to mongo
function MongoUtils() {
  const mu = {};

  let hostname = "localhost",
    port = 27017,
    dbName = "NeighborAssist";
  const user = process.env.MONGO_USER,
    pwd = process.env.MONGO_PWD;

  mu.connect = () => {
    console.log("Trying to connect");
    let url = `mongodb://${hostname}:${port}`;
    //if (user === undefined) {
    //  url = process.env.MONGODB_URI;
    //} else {
    //  url = `mongodb://${user}:${pwd}@${hostname}:${port}`;
    //}
    console.log(url);
    const cliente = new MongoClient(url, { useUnifiedTopology: true });
    console.log("Connected");
    return cliente.connect();
  };

  mu.newFavor = (favor) => {
    console.log(favor);
    return mu.connect().then((client) => {
      client
        .db(dbName)
        .collection("favors")
        .insertOne(favor)
        .finally(() => client.close());
    });
  };

  mu.getAllFavors = () => {
    return mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("favors")
        .find()
        .sort({ date: -1 })
        .toArray()
        .finally(() => client.close())
    );
  };

  return mu;
}
const mu = MongoUtils();
module.exports = mu;
