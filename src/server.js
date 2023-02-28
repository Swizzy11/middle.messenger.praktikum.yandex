const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');


app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/*', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
