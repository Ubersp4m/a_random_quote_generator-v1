/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//empty array
let quotes = [];
//empty object
quotes =[ 
  {
    quote: "Make it so, number one",
    source: "Capt. Jean-Luc Picard",
    citation: "Star Trek The Next Generation",
    year: "",
    tags: "sci-fi"
},
{
    quote: "Fly! You fools!",
    source: "Gandalf",
    citation: "Lord of the Rings",
    year: "",
    tags: "fantasy"
},
{
    quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    source: "Princess Diana",
    citation: "",
    year: "1991",
    tags: "political"
},
{
    quote: "O! many a shaft, at random sent, Finds mark the archer little meant! And many a word, at random spoken, May soothe or wound a heart that's broken!",
    source: "Walter Scott",
    citation: "",
    year: "",
    tags:""
},
{
    quote: "Random chance plays a huge part in everybody's life.",
    source: "Gary Gygax",
    citation: "",
    year: "",
    tags:""
}
];


/***
 * `getRandomQuote` function
 * uses getRandomNumber() function to return a quote object from the quotes array
***/
function getRandomQuote(){
  
  return quotes[getRandomNumber(quotes.length)];
}

function getRandomNumber(upper){
 return Math.floor( Math.random() * upper);
}

/***
 * `printQuote` function
 * 
 * gets a random quote using getRandomQuote() function
 * assigns a new rgb color to the background
***/
function printQuote(){
    let red = getRandomNumber(256);
    let green = getRandomNumber(256);
    let blue = getRandomNumber(256);
    
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    
    let quote = getRandomQuote();
    let quotebox = document.getElementById("quote-box");
    let html = "";
    for(prop in quote){
      if (prop === "quote"){
        html+=`<p class="${prop}">${quote[prop]}</p>`
      }
      else if (prop === "source"){
        html+=`<p class="${prop}">${quote[prop]}`
      }
      else if (quote[prop]){
        html += `<span class="${prop}">${quote[prop]}</span>`
      }
    }
    html += '</p>';
    quotebox.innerHTML = html;
  }

  setInterval(printQuote, 10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);