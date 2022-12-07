import express from "express";
import { PORT } from "./config";

import routes from "./routes";

const app = express();

app.use(routes);

app.listen(PORT, () => {
  console.log(`MyIpvc Card Generator listening on port ${PORT}`);
});
