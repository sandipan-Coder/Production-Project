import express from "express";
import cors from "cors";
import path from "path";
import cardRouter from "./routes/card.routes.js";

const app = express();

app.use(
  cors({
    origin: "https://ambhika-jwellers.onrender.com/",
    credentials: true,
  })
);

const _dirname = path.resolve();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Routes Declaration
app.use("/cards", cardRouter);

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get('*', (_, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
})

export { app };
