const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/junior-forever'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + 'dist/junior-forever/index.html')
});

app.listen(PORT, () => {
  console.log('Server was started in port ' + PORT);
});
