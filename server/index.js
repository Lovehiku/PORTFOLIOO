import express from "express";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const STORAGE = resolve(__dirname, "submissions.json");

app.use(cors());
app.use(express.json());

async function readSubmissions() {
  try {
    const buf = await readFile(STORAGE, "utf-8");
    return JSON.parse(buf);
  } catch {
    return [];
  }
}

async function writeSubmissions(data) {
  await writeFile(STORAGE, JSON.stringify(data, null, 2));
}

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  const validEmail = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !validEmail || !message) {
    return res.status(400).json({ ok: false, error: "Invalid payload" });
  }
  const submissions = await readSubmissions();
  const entry = {
    id: Date.now().toString(36),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };
  submissions.push(entry);
  await writeSubmissions(submissions);
  res.json({ ok: true, entry });
});

app.get("/api/contact", async (_req, res) => {
  const submissions = await readSubmissions();
  res.json({ ok: true, submissions });
});

app.listen(PORT, () => {
  console.log(`Contact server listening on http://localhost:${PORT}`);
});
