
import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import stolikRoutes from "../routes/stolik";
import restauracjaRoutes from "../routes/restauracja";
import pracownikRoutes from "../routes/pracownik";

const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

const dbURI =
  "mongodb+srv://pawelsocha:mongo300@cluster0.gltbz43.mongodb.net/test";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result:any) => console.log("Connected to Mongoose: " + app.listen(3000)))
    .catch((err:any) => console.log("Failed to connect to Mongoose: " + err))

app.use(bodyParser.json());

app.use("/stolik", stolikRoutes);
app.use("/restauracja", restauracjaRoutes);
app.use("/pracownik", pracownikRoutes);

app.get("/", function (req: Request, res: Response) {
  res.send("Witaj w API restauracji");
});