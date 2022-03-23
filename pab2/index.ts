import express from 'express'
import {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get('/', function (req: Request, res: Response) {
  res.send('GET Hello World')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title 
  res.status(200).send('POST Hello World')
})
export interface Note {
    title: string; 
    content: string;
    createDate?:Date;
    tags?: string;
    id?: number;
}

const getPost = async (req: Request, res: Response) => {
    
    let id: string = req.params.id;
    let post: Request = req.data;
    return res.status(200).json({
        message: post
    });
};

app.listen(3000)