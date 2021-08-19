const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3500;

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Express server is listening at port: ${port}`);
});

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
