import { MongoClient } from "mongodb";
// const url = 'mongodb://sample:sample11!!@db.fesp.shop:27017';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = '00-sample';
console.log('try to connect...');
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

const model = {
  post: {
    async list(){
      return [];
    }
  },
  user: {}
};

export default model;
