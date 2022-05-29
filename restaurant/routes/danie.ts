import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Danie = require("../models/danieSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Danie.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Danie.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Nie ma takiego dania");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let danie = new Danie({
    nazwa: req.body.nazwa,
    cena: req.body.cena,
    kategoria: req.body.kategoria,
  });

  danie
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Błędne dane");
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Danie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie ma dania o takim ID");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Danie.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "Nie ma dania o takim ID lub zostało usunięte"
      );
    });
});

export default router;