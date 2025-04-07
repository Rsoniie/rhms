import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db_connection.js';
import addAll from './services/addAll.js';

import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api', userRoutes);
app.use('/add_all', addAll);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});