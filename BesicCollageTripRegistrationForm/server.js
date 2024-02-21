const express = require("express");
const app = express();
port = 3000;

const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL);

app.listen(port, () => {
    console.log('Server is running on port 3000');
  });

async function getConnection()
{
  let result = await client.connect();
  let db = result.db("Dipak");
  return db.collection("register");
}

app.get('/AddData', (req, res) => {
    const queryParams = req.query; // Extracting query parameters
    // Do something with the received data
    console.log(queryParams);
    res.send('Data received successfully');
    InsertData(queryParams);
    //Read();
  });

async function InsertData(Data)
{
  let data = await getConnection();
  //req.InsertData(Value2);
  let result = await data.insertOne(Data);

  if(result.acknowledged)
  {
      console.log("Data gets succesfully inserted");
      
      //(Read);
  }
}

//async function Read(res,req)
//{
  //let result = await getConnection();
 // result = await result.find().toArray();
 // res.json(result);
//}