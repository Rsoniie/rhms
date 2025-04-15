import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db_connection.js';
import addAll from './services/addAll.js';
// import alertHandler from './services/alertHandler.js';

import userRoutes from './routes/userRoutes.js';
import parentRoutes from './routes/parentRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

await connectDB();
app.use('/api', userRoutes);
app.use('/p_api', parentRoutes);
app.use('/add_all', addAll);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});








