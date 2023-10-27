import { Request, Response } from "express";

const express = require("express");
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Home Page");
});

app.listen(4000, (req: Request, res: Response) => {
  console.log("app listening to port 4000");
});
