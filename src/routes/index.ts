import Router, { Request, Response } from "express";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.status(200).json("Hello World");
});

export default router;
