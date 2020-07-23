import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Connecting to the mongodb database
mongoose.connect(process.env.URI,{useNewUrlParser :true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connected to database successfully");
});

//Path to go in crud.js file where the HTTP methods are defined i.e.- GET, POST
import userRouter from './crud.js';
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
