import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

const quotes = [
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    quote: "I should have been more kind.",
    author: "Clive James",
  },
];

app.get("/", (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  res.json(quotes[index]);
});

app.post("/", (req, res) => {
  const { quote, author } = req.body;

  if (!quote || !author || quote.trim() === "" || author.trim() === "") {
    return res.status(400).json({
      error: "Quote and author cannot be empty",
    });
  }

  quotes.push({
    quote: quote.trim(),
    author: author.trim(),
  });

  res.json({ message: "Quote added successfully" });
});

app.listen(port, () => {
  console.log(`Quote server running on http://localhost:${port}`);
});
