const genbuttonEl = document.getElementById("genbutton");
const quote_textEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://dummyjson.com/quotes/random";

async function getQuote() {
  try {
    genbuttonEl.innerText = "Loading...";
    genbuttonEl.disabled = true;

    const response = await fetch(apiURL);
    const data = await response.json();

    quote_textEl.innerText = data.quote;
    authorEl.innerText = "~ " + data.author;

    genbuttonEl.innerText = "Generate Quote";
    genbuttonEl.disabled = false;
  } catch (error) {
    console.error(error);
    quote_textEl.innerText = "Failed to fetch quote.";
    authorEl.innerText = "";
    genbuttonEl.innerText = "Generate Quote";
    genbuttonEl.disabled = false;
  }
}

genbuttonEl.addEventListener("click", getQuote);