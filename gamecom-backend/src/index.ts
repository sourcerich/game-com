import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { db } from "./config/db";

dotenv.config();
const app = express();
const port = process.env.PORT ?? 8080;
app.use(bodyParser.json());
app.use(express.json());

(async () => {
  try {
    await db.sequelizeDB.sync();
    console.info("Connected to db");
  } catch (err) {
    console.error(err);
  }
})();

app.get("/user", (req, res) => {
  res.status(200).type("txt").send("Hello from User Management");
});
app.get("/user", (req, res) => {
  res.status(200).type("txt").send("Hello from User Management");
});
process.on("uncaughtException", function (error, origin) {
  console.log("global error handled");
  console.log(error, origin);
});

app.listen(port, () => {
  console.log(`User management is up and listening on port ${port}`);
});

function shutdown(signal: string | number | undefined) {
  (async () => {
    console.log(`Received signal to terminate: ${signal}`);
    process.kill(process.pid, signal);
  })();
}
process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);