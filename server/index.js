import dotenv from 'dotenv'
dotenv.config()
import database from './config/database.js';
import express from 'express';
import routes from './routes/index.js'
import cors from 'cors';
import helmet from 'helmet';

const app = express();


const host =  "http://localhost"
const port =  5000
const apiVersion =  "v1"

console.log(`${host} ${port} ${apiVersion}`)

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get(`/api/${apiVersion}`,(req,res)=>{
//     res.send("Welcome to my server!")
// })

database();
app.use(`/api/${apiVersion}`,routes())

app.listen(port,()=>{
    console.log(`Server is running at ${host}:${port}/api/${apiVersion}`)
})
