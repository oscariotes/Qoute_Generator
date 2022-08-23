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
   console.log(quote);
}

newQoute();