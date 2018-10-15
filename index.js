let {PythonShell} = require('python-shell');

const express = require('express');
const path = require('path');
var logger = require('morgan');
var proxyaddr = require('proxy-addr');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


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
    console.log('Sent list of items');
});

function logData(data){
  for(let i =0; i<data[1][1].length; i++){
    if(data[1][i]['issued'] === ''){
      data[1][i]['issued'] = 0;
    }
    if(data[1][i]['returned'] === ''){
      data[1][i]['returned'] = 0;
    }
  }
  // for(let i = 0; i<data.length; i++){
  //   console.log(data[0][i]['name']+': ' + data[0][i]['issued'] + ' | ' + data[0][i]['returned'])
  // }
  // console.log(data[1])
  return data;
}

function testSpawn(data){
  let spawn = require('child_process').spawn;
  let pythonProcess = spawn('python', ['pointsheet.py', JSON.stringify(data)], {
    'cwd': './client'
  });

  pythonProcess.stdout.on('data', function(data){
    let newBuffer = Buffer.from(data)
    let jsonn = JSON.stringify(newBuffer)
    let original = Buffer.from(JSON.parse(jsonn).data);
    console.log('stdout')
    console.log(original.toString('utf8'));
    // console.log(jsonn)
  });
}

app.post('/submitInventory', (req,res) => {
  console.log('fetch received')
  // console.log(req.body[1])
  let data = logData(req.body);
  res.json(data)
  testSpawn(data);
})



// Handles any requests that don't match the ones above
app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(8000, "127.0.0.1");

console.log('App is listening');
