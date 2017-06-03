// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotesCopy = [];

//get random quote from quotes.js, removes quote from array (to prevent duplicate quote showing), return quote object
function getRandomQuote() {
    //returns random # between 0 and the length of the quotes array
    var rand = Math.floor(Math.random() * quotes.length); 
    
    //copies the quote to a variable, that way I can remove the quote from the array before returning the quote
    var quoteReturn = quotes[rand];
    
    //copies quote to 2nd array and removes quote from quote array
    quotesCopy.push(quotes[rand]);
    quotes.splice(rand, 1);
    
    //if quote array is empty, copy 2nd array to quotes array and empties 2nd array
    if (quotes.length === 0){
        quotes = quotesCopy.slice();
        quotesCopy = [];
    }
    
    return quoteReturn;
}

//print the quote from getRandomQuote()
function printQuote() {
    var quote = getRandomQuote();
    console.log(quote);
    document.getElementById('quote-box').innerHTML = format(quote);
}

//formats the quote to the correct html tags
function format(quote) {
    var message = "";
    
    message += "<p class=\"quote\">" + quote.quote + "</p>";
    message += "<p class=\"source\">" + quote.source;
    
    //cond. statements check to see if citation and/or year exists, if it does it adds it to the message
    if (quote.citation !== undefined){
        message += "<span class=\"citation\">" + quote.citation + "</span>";
    }
    if (quote.year !== undefined){
        message += "<span class=\"year\">" + quote.year + "</span>";
    }
    
    message += "</p>";
    return message;
}
