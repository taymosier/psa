let {PythonShell} = require('python-shell');

const express = require('express');
const path = require('path');
var logger = require('morgan');
var proxyaddr = require('proxy-addr');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;


const app = express();

app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

// Serve the static files from the React app
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/build/static')));

// An api endpoint that returns a short list of items
app.get('/api/getlist', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
});


//Prints inputted data to console
function logData(data){
  console.log('Log data')
  for( let i =0; i < data[1].length; i++){
    if(data[1][i]['quantity']['issued'] === ''){
      data[1][i]["quantity"]['issued'] = 0;
      data[1][i]["quantity"]['returned'] = 0;
    }
  }
  return data;
}

// On submit inventory request, runs a python script
// that posts the inputted information to a mongoDB
// database, then writes the data to an excel file,
// and emails the generated spreadsheet
app.post('/submitInventory', (req,res) => {
  console.log('submit request received')
  let data = logData(req.body);
  console.log(data)
  res.json(data)
  spawnPythonProcess('send', data);
});

// On save inventory request, runs a python script that
// saves the inputted data to the mongoDB database
app.post('/savePointsheet', (req,res) => {
  console.log('save request received')
  let data = req.body;
  console.log(data)
  res.json(data)
  spawnPythonProcess('save', data);
});

//Determines which python script to run
function spawnPythonProcess(option, data){
  console.log('Spawning python process')
  let spawn = require('child_process').spawn;
  switch(option){
    case "save":
      saveDataToDB(spawn, data);
      break;
    case "send":
      console.log('case "send"')
      console.log(data[1])
      console.log()
      writeDataToDBAndEmail(spawn, data);
      break;
    default:
      console.log('Bad request received')
      break;
  }
}


function writeDataToDBAndEmail(spawn, data, ){
  console.log('writing data to db')
  console.log(data)
  try{
    console.log('Data being written')
    let pythonProcess = spawn('python', ['pointsheet.py', JSON.stringify(data)], {
      'cwd': './client'
    });
    printDataToConsole(pythonProcess, data)
  } catch(e){
    console.log(e)
  }
  console.log('python process called/passed')
}


function saveDataToDB(spawn, data){
  console.log('Data being saved')
  console.log(data)
  let pythonProcess = spawn('python', ['savePointSheet.py', JSON.stringify(data)], {
    'cwd': './client'
  });
  printDataToConsole(pythonProcess, data)
}


function printDataToConsole(childProcess, data){
  childProcess.stdout.on('data', function(data){
    let newBuffer = Buffer.from(data)
    let jsonn = JSON.stringify(newBuffer)
    let original = Buffer.from(JSON.parse(jsonn).data);
    console.log(original.toString('utf8'));
  });
  childProcess.stderr.on('data', (data) => {
    console.error(`child err:\n${data}`)
  })
}

// Upon receiving post request, submits
// data to mongoDB
app.post('/requestDocument', (req,res) => {
  let selectedDocumentDate = req.body;
  console.log('Express data received')
  console.log(req.body[0])
  let url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("gcc");
    const ObjectId = require('mongodb').ObjectID;
    let id;
    try {
      id = req.body[0].toString();
    } catch(e){
      console.log(e)
    }
    try{
      id = new ObjectId(id);
    } catch(e){
      console.log(e)
    }
    dbo.collection("inventory").findOne({"_id": id}, function(err, result)
    {
      if (err) throw err;
      if (result === null){
        console.log('Not Found, result === null')
        db.close();
        res.send("Not Found")
      } else {
        console.log('/requestDocument result')
        console.log(result);
        db.close();
        res.send(result);
      }
    });
  });
})

// Listens for initial document load request, then sends back the five most
// recent spreadsheets
app.get('/initialDocLoad', (req, res) => {
  let events = [];
  let url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("gcc");
    dbo.collection("inventory").find({}).toArray(function(err, result)
    {
      if (err) throw err;
      console.log('Hi there')
      if(result){
        console.log(result.length)
        if(result.length > 0){
          for(let i=0; i < result.length; i++){
            try{
              events.push({
                "_id": result[i]["_id"],
                "Event Number": result[i]["info"]["Event Number"]
              })
            } catch(e){
              console.log(`${i}: `+e)
            }
          }
          console.log(events)
        }
      }
      db.close();
      res.send(events);
    });
  });
})

//Listens for request of homepage url
app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(5000, "127.0.0.1");

console.log('App is listening');
