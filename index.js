const express = require('express');
const DataStore = require('nedb');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));


app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

//There are two databases initiated
const vDatabase = new DataStore('volunteerDatabase.db');
const sDatabase = new DataStore('seekerDatabase.db');
sDatabase.loadDatabase();
vDatabase.loadDatabase();

//api calls for seekers

app.post('/seeker', (request,response) => {
  console.log("request received");
  const data = request.body;
  
  sDatabase.insert(data);

  response.json({
    status: "success",   
  });
});

app.get('/seeker', (request, response) => {
  sDatabase.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

//api calls for volunteers

app.post('/volunteer', (request,response) => {
  console.log("request received");
  const data = request.body;
  vDatabase.insert(data);

  response.json({
    status: "success",   
  });
});

app.get('/volunteer', (request, response) => {
  vDatabase.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});