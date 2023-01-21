import express from 'express';
import { router } from './router';

const server = express();
const port = 3333;

server.use(express.json());
server.use(router);

server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});