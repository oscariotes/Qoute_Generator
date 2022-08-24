const container = document.getElementById('container');
const text = document.getElementById('text');
const author = document.getElementById('author');
const twitter = document.getElementById('twitter');
const quote_button = document.getElementById('quote_button');

/* let apiQuote = [];

// Get quotes from API

async function getQuote() {
    const apiUrl = '';
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json;
        console.log(getQuote);
 
     } catch(error) {
        //error goes here.
     }
}

getQuote(); */

//get quotes from local array
function newQoute() {
   const quote = localQuotes [Math.floor(Math.random() * localQuotes.length)];
//if author is null
   if (!quote.author) {
      author.textContent = 'Unknown'
   }else {
      author.textContent = quote.author;
   }
 //for long quotes
   if (quote.quote.length > 90) {
      text.classList.add('long-text');
   }else {
      text.classList.remove('long-text');
   }  
   text.textContent = quote.quote; 
}

//tweet this

function newTweet() {
   const twitterUrl = `https://twitter.com/intent/tweet?text${text.textContent} - ${author.textContent}`;
   window.open(twitterUrl, '_blank');
}

//Event Listeners

twitter.addEventListener('click', newTweet);
quote_button.addEventListener('click', newQoute);

newQoute();