import express from "express";
import dotenv from "dotenv";

import routes from "./routes";

const app = express();
dotenv.config();

const PORT = process.env.port || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`MyIpvc Card Generator listening on port ${PORT}`);
});
