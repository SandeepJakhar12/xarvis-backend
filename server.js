const express = require("express");
const app = express();

app.use(express.json());

app.post("/command", (req, res) => {
  const text = (req.body.text || "").toLowerCase();

  let reply = "Command unclear, Sir.";
  if (text.includes("status")) reply = "All systems operational, Sir.";
  if (text.includes("focus")) reply = "One task. Maximum impact.";

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("XARVIS backend active");
});
