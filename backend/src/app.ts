import express from "express";
import cors from "cors";
import weatherRouter from "./routes/weather";
import historyRouter from "./routes/history";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/weather", weatherRouter);
app.use("/history", historyRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
