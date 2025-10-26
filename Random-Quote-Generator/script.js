const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

async function getQuote() {
  try {
    loader.style.display = "block";
    quoteText.classList.add("fade");
    authorText.classList.add("fade");

   const response = await fetch("https://api.allorigins.win/get?url=https://zenquotes.io/api/random");
const data = await response.json();
const quote = JSON.parse(data.contents);
console.log(quote);

    setTimeout(() => {
      loader.style.display = "none";

quoteText.textContent = `"${quote[0].q}"`;
authorText.textContent = `- ${quote[0].a}`;
      quoteText.classList.remove("fade");
      authorText.classList.remove("fade");
    }, 500);
  } catch (error) {
    quoteText.textContent = "Oops! Could not fetch a quote.";
    authorText.textContent = "";
    loader.style.display = "none";
  }
}


newQuoteBtn.addEventListener("click", getQuote);
