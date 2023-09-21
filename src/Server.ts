import { createServer } from "http";
import { IncomingMessage, ServerResponse } from "node:http";

export class Server {
  public startServer() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      console.log(`Request header: ${req.headers}`);
      res.write("Hello from TypeScript server!");
      res.end();
    }).listen(8080);
    console.log("Started server");
  }
}
