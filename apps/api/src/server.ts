import { createServer } from "http";
import app from "./app";

const server = createServer(app);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
