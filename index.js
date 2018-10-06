const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
try {
  app.get('/api/getList', (req,res) => {
      var list = ["item1", "item2", "item3"];
      res.json(list);
      console.log('Sent list of items');
  });
} catch(e) {
  console.log(`outer try/catch\n ${e}`);
}

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(8080, "10.136.132.80");

console.log('App is listening');
