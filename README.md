# Quote Generator App

A simple full-stack Quote Generator built with **Node.js (Express)** for the backend and **HTML, CSS, JavaScript** for the frontend.

Users can view random quotes and add new quotes through a form.

---

## 🚀 Live Links

Frontend: http://nc0tibsaiibtsi23gq70rzz8.178.105.39.91.sslip.io  
Backend API: http://gwnua349zd0cw8jtzttehx75.178.105.39.91.sslip.io  

---

## 🛠️ Tech Stack

- HTML, CSS, JavaScript
- Node.js
- Express.js
- CORS

---

## ✨ Features

- Get random quotes from API
- Add new quotes via frontend form
- Input validation (no empty quotes)
- Error handling for requests

---

## 📡 API

### GET /
Returns a random quote

### POST /
Add a new quote

Request body:
```json
{
  "quote": "Your quote",
  "author": "Author name"
}