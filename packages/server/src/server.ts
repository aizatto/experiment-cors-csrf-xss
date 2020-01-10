import express from 'express';

const PORT = 3001;

const app = express();

app.get('/admin', function (req, res) {
  res
    .status(200)
    .send('Hello World')
})
 
app.get('/api', function (req, res) {
  res
    .status(200)
    .send('Hello World')
})
 
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`)
})