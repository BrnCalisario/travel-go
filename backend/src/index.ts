import 'dotenv/config'
import express from "express"

import connectDB from './config/db.server'

import { setupConfigs, setupControllers } from './services/setup';

const PORT = process.env.PORT;

const app = express()

connectDB();

// SETUP
setupConfigs(app)

setupControllers(app);


app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT));