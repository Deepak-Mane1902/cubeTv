import  connectDB  from './db/indexDB.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' }); // use './.env' or remove path to use default
connectDB();
