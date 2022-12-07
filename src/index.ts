import express from "express";
import helmet from "helmet";
import cors from "cors";

import { PORT } from "./config";

import routes from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(helmet());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors({ credentials: true, origin: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`node-typescript-starter listening on port ${PORT}`);
});
