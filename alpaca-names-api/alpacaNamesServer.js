import uniqueRandomArray from 'unique-random-array';
import express, { json } from 'express';

const app = express(),
      port = 3080;

app.use(json());

const alpacaNames = ["Зефирка", "Вылупонька", "Альпачино"];
const alpacaNameRandom = uniqueRandomArray(alpacaNames);

app.get('/api/generateAlpacaName', (request, response) => {
  console.log('/api/generateAlpacaName called');
  
  response.json(alpacaNameRandom());
});

app.get('/', (request, response) => {
    response.send('Alpaca Names server works');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});