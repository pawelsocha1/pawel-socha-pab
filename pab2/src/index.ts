import { notStrictEqual } from "assert";
import express from "express";
import { Request, Response } from "express";
import { title } from "process";



const app = express();

app.use(express.json());

interface Note {
  title: string;
  content: string;
  createDate?: string;
  tags?: any[];
  id?: number;
}

let notatka: Note[] = [
  {
    title: "ełła",
    content: "nananan",
    createDate: "29-05-2022",
    tags: ["a", "b", "c"],
    id: 1,
  },
  {
    title: "co kupić",
    content: "buraki, ziemniaki, kapusta",
    createDate: "29-05-2022",
    tags: ["d", "e", "f"],
    id: 2,
  },
];

app.get("/note/:id", function (req: Request, res: Response) {
  const title = req.body.title;
  const content = req.body.content;

  var ID = req.params.id;
  const IDnumber = +ID;

  for (const item of notatka) {
    if (item.id == IDnumber && ID != null) {
      res.status(200).send(item);
    } else {
      res.status(404).send("Nie ma notatki o takim ID")
    }
  }

});

app.post("/note", function (req: Request, res: Response) {

  const title = req.body.title;
  const content = req.body.content;
  if (title == null && content == null) {
    res.status(400).send("Błędne dane");
  } else {
    const note = req.body;
    const date = new Date()
    date.toISOString();
    note.date = date
    note.id = Date.now().toString()
    notatka.push(note);
    res.status(200).send(note.id);
  }


});

app.delete("/note/:id", (req, res) => {
  const { id } = req.params;
  const ID = +id;

  notatka = notatka.filter((note) => note.id !== ID); 

  res.send("Usunięto notatkę");
});

app.put("/note/:id", (req, res) => {
  const { id } = req.params;
  const ID = +id;

  const { title, content, createDate, tags } = req.body;

  const note = notatka.find((note) => note.id === ID);
  if (note == null) {
    res.status(404).send("Nie ma notatki o takim ID")
  }else{
    function validateToken(note: any) {
      return note;
    }
  
    validateToken(note as any);
  
    if (title) {
      note!.title = title;
    }
    if (content) {
      note!.content = content;
    }
    if (createDate) {
      note!.createDate = createDate;
    }
    if (tags) {
      note!.tags = tags;
    }
    res.send(note);
  }


});

app.listen(3000);