import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { OrderRoute } from './app/module/orders/order.route';
import { ProductRoute } from './app/module/products/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/orders", OrderRoute);


app.use("/api/products", ProductRoute);
app.get("/", (req: Request, res: Response) => {
  res.json({ success: true, server: "running............." });
});

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    success: false,
    message: "Route not found",
  });
});

export default app;