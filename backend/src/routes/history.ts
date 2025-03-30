import { Request, Response, Router } from "express";
import { weatherHistory } from "./weather";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json(weatherHistory);
});

export default router;
