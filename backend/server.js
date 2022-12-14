import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is listening at http://localhost:${process.env.PORT || 3000} 🚀`
  );
});
