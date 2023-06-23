const express = require('express');
const usersRouter = require("./routes/users.js");

const app = express();
const port = 5000;

const connect = require('./schemas');
connect();


// 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("assets"));
app.use("/api", [ usersRouter]);


const postsRouter = require('./routes/posts');
app.use('/posts', [postsRouter]);

const commentsRouter = require('./routes/comments');
app.use('/posts', [commentsRouter]);

app.get('/', (req, res) => {
  res.send('hello blog :)');
});

app.listen(port, () => {
  console.log(`${port} 포트 서버가 열렸어요.`);
});
