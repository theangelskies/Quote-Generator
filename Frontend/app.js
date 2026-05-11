const API_URL = "http://gwnua349zd0cw8jtzttehx75.178.105.39.91.sslip.io";

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
