import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";

const PORT = 2999;

const app = express();
app.use(cookieParser());
// app.use(cors());

app.get('/set-cookie', function (req, res, next) {
  const { name, value, path, httpOnly } = req.query;
  console.log(req.query);
  if (!name) {
    res
      .status(400)
      .end();
    return;
  }

  res.cookie(
    name,
    value,
    {
      path: path ?? '',
      httpOnly: !!httpOnly,
    }
  );
  // res
  //   .status(200)
  //   .send('Hello World')
  next();
});

app.use(function (req, res) {
  // http://expressjs.com/en/5x/api.html#req.cookies
  console.log(req.cookies);
  res.setHeader('Content-Type', 'application/json');

  return res
    .status(200)
    .send(JSON.stringify({
      'req.cookies': req.cookies,
    }))
    .end();
});
 
// app.get('/api', function (req, res) {
//   res
//     .status(200)
//     .send('Hello World')
// })
 
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`)
})