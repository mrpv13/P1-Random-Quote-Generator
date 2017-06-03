// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//get random quote from quotes.js and return quote object
function getRandomQuote() {
    //returns random # between 0 and the length of the quotes array
    var rand = Math.floor(Math.random() * quotes.length); 
    return quotes[rand];
}

//print the quote from getRandomQuote()
function printQuote() {
    var quote = getRandomQuote();
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
