import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { OrderRoute } from './app/module/orders/order.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/orders", OrderRoute);

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;