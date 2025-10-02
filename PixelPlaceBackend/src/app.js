import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import testRoute from './routes/test.js';
import emailRoute from './routes/email.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173',  // your frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

app.use('/api/test', testRoute);
app.use('/api/email', emailRoute);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
