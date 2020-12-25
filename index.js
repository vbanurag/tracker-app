require("dotenv").config();
import express from 'express';
import router from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const MONGO_URL = process.env.DB_URL;

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected at ${MONGO_URL}`))
  .catch(err => console.log(`Database connection error: ${err.message}`));

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api/v1', router);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server url : localhost:${process.env.PORT || 8080}`)
});
