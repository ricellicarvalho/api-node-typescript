import express from 'express';
import { router } from './router';
import { config } from 'dotenv';

config();

const server = express();

server.use(express.json());
server.use(router);

server.listen(process.env.PORT || 3333, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT || 3333}`);
});