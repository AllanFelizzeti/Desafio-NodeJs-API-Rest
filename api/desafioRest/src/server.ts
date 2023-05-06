import cors from "cors";
import express from "express";
import { AppDataSource } from "./database/data-source";
import routers from "./routes/routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

AppDataSource.initialize().then(async () => {
  console.log('Database ok');
  app.listen(3333, () => {
    console.log('Server started on port 3333🚀');
  })
})