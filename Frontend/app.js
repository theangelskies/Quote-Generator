const API_URL = process.env.BACKEND_URL || "http://localhost:3000";

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const button = document.getElementById("btn");

async function loadQuote() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    quoteEl.textContent = data.quote;
    authorEl.textContent = "- " + data.author;
  } catch (err) {
    console.error(err);
  }
}

loadQuote();
button.onclick = loadQuote;
