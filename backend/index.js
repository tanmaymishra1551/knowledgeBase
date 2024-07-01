import express from 'express';
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


connectDB()
.then(
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on port ${process.env.PORT || 3000}`);
    })
)
.catch((error) => {
    console.log(`Mongodb connection failed: ${error}`);
});

