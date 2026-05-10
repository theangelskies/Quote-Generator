const API_URL = "http://j11rlr6ue3ulpk0bfrddot0q.178.105.39.91.sslip.io";

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
