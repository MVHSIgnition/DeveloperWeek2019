const request = require('request');
const cheerio = require('cheerio');

// Requesting to the website
request('https://www.zomato.com/santa-clara-ca/mezbaan-bar-indian-cuisine-santa-clara/menu', (error, response, html) => {
    // Checking that there is no errors and the response code is correct
    if(!error && response.statusCode === 200){
        // Declaring cheerio for future usage
        const $ = cheerio.load(html);
        
        // Looking at the inspector or source code we will select the following id value 
        const siteHeading = $('#main-header') ;

        // Showing our result on the console
        console.log(siteHeading.html());
    }
});