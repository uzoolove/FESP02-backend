import { MongoClient } from "mongodb";
// const url = 'mongodb://sample:sample11!!@db.fesp.shop:27017';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = '00-sample';
console.log('try to connect...');

// Use connect method to connect to the server
await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
db.post = db.collection('post');
db.user = db.collection('user');


const model = {
  post: {
    async list(){
      return [];
    }
  },
  user: {}
};

export default model;
