import express from "express";
import cors from "cors";
import emailRouter from "./routes/email.js";

const app = express();
const PORT = 3000;

app.use(cors());               // Allow frontend requests
app.use(express.json());       // Parse JSON bodies

// Mount the email test route
app.use("/api/email", emailRouter);

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

app.listen(PORT, () => {
  console.log(`PixelPlace backend running on http://localhost:${PORT}`);
});
