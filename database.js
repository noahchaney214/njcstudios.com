const { MongoClient } = require('mongodb');
const client = new MongoClient("http://localhost:27017");

await client.connect();