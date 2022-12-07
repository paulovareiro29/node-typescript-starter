import Router, { Request, Response } from "express";
import extendedResponse from "../middlewares/extended-response.middleware";

const router = Router();

router.use(extendedResponse);

router.get("/", (request: Request, response: Response) => {
  return response.status(200).json("Hello World");
});

export default router;
