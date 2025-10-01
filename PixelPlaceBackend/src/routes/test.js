import { Router } from "express";

const router = Router();

// Simple GET test route
router.get("/", (req, res) => {
  console.log("✅ Test request received!");
  res.json({ message: "Hello from PixelPlace backend!" });
});

export default router;
