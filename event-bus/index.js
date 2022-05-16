const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const events = [];

app.post('/events', (req, res) => {
  try {
    const event = req.body;

    events.push(event);

    axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
      console.log(err.message);
    });

    // axios.post('http://localhost:4001/events', event).catch((err) => {
    //   console.log(err.message);
    // });

    // axios.post('http://localhost:4002/events', event).catch((err) => {
    //   console.log(err.message);
    // });

    // axios.post('http://localhost:4003/events', event).catch((err) => {
    //   console.log(err.message);
    // });

    res.send({ status: 'OK' });
  } catch (error) {
    console.log(error.messageI);
  }
});

app.get('/events', (req, res) => {
  return res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
