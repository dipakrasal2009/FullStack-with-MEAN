const express = require('express');
const app = express();
port = 5200;

const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL);

async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches");
}


app.listen(port, function(req,res){
  console.log("DipakRasal Server is started succesfully at Port : "+port);
  console.log("Data is Displayed on the client area in web Browser");

});

//Handling cors
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200");

  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept");

  next();
});

/*app.get('/getBatches',MarvellousGetBatches);

function MarvellousGetBatches(req,res)
{
  res.json({"batch":"PPA", "Fees": 18500});
}


async function ReadData()
{
    let data = await GetConnection();
    data = await data.find().toArray();
    console.log("Data from tha Marevllous Database is : ");
    console.log(data);
}
*/

app.get('/getBatches',ReadDatas);

async function ReadDatas(req,res)
{
  let Data = await GetConnection();
  Data = await Data.find().toArray();
  res.json(Data);

}


function main()
{
    let ret;
    ret = GetConnection();
    console.log("Application Connected to the MongoDB Database Successfully");

    //ReadData();
    //DeleteData();
    //InsertData();
    //UpdateData();
}

main()