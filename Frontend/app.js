const API_URL = "http://localhost:3000"; // or your deployed URL

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const button = document.getElementById("btn");

async function fetchQuote() {
  try {
    // loading state
    quoteEl.textContent = "Loading...";
    authorEl.textContent = "";

    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();

    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `- ${data.author}`;
  } catch (error) {
    console.error(error);
    quoteEl.textContent = "Failed to load quote.";
    authorEl.textContent = "";
  }
}

// Load first quote on page load
fetchQuote();

// Fetch new quote on button click
button.addEventListener("click", fetchQuote);
