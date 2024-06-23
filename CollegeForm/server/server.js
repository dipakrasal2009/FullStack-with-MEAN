const express = require("express");
const app = express();
app.use(express.json());

port = 3000;

const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL);

app.listen(port, () => {
    console.log('Server is running on port 3000');
  });


// app.use((req,res,next)=>{
//   res.header("Access-Control-Allow-Origin",
//   "http://localhost:4200");

//   res.header("Access-Control-Allow-Headers",
//   "Origin, X-Requested-with, Content-Type, Accept");

//   next();
// });

/*

function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}*/

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
    //res.send('Data received successfully');
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
      
      //Read();
  }
}

// app.get('/Data',Read)
// async function Read(res,req)
// {
//   let result = await getConnection();
//   result =await result.find().toArray();
//   console.log(result);

//   //res({result});
//   req.json({result});

// }


///////////////////////////////////////////////////////////////////////

app.get('/Data', async function(res,req){
  let result = await getConnection();
  result = await result.find().toArray();
  //console.log(result);
  req.json(result);

})













/*app.get('/Data',val)

function val(res,req)
{
  let Ret = Read();

  res.json(Ret);
}
*/



