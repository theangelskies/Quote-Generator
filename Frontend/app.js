const API_URL = "http://gwnua349zd0cw8jtzttehx75.178.105.39.91.sslip.io";

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const button = document.getElementById("btn");
const form = document.getElementById("quoteForm");
const newQuoteInput = document.getElementById("newQuote");
const newAuthorInput = document.getElementById("newAuthor");
const messageEl = document.getElementById("message");

async function loadQuote() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    quoteEl.textContent = data.quote;
    authorEl.textContent = "- " + data.author;
  } catch (err) {
    console.error(err);
    messageEl.textContent = "Failed to load quote.";
    messageEl.style.color = "red";
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const quote = newQuoteInput.value.trim();
  const author = newAuthorInput.value.trim();

  if (!quote || !author) {
    messageEl.textContent = "Please fill in both fields.";
    messageEl.style.color = "red";
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quote, author }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    messageEl.textContent = "Quote added successfully!";
    messageEl.style.color = "green";

    form.reset();
    loadQuote();
  } catch (err) {
    console.error(err);
    messageEl.textContent =
      err.message || "Failed to add quote. Check backend.";
    messageEl.style.color = "red";
  }
});

loadQuote();
button.onclick = loadQuote;
