/**
 * 
    Implement a URL shortener with the following methods:
    shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
    restore(short), which expands the shortened string into the original url. 
    If no such shortened string exists, return null.
    Hint: What if we enter the same URL twice?

    https://www.dailycodingproblem.com/solution/55?token=d2380e4e629da91b2003fdd29c0e10bdac0de53659662e74f8f1ed2c43eae574fe25e2fe


    HINT: 
    
        // 0 -> 10
        Math.floor(Math.random() * 11);

        // 1 -> 10
        Math.floor(Math.random() * 10) + 1;

        // 5 -> 20
        Math.floor(Math.random() * 16) + 5;

        // -10 -> (-2)
        Math.floor(Math.random() * 9) - 10;
 */

var short_to_url = {};
var url_to_short = {};

function generateShort(){
    let aleatory_string = '';
    for (let i=0; i<6; i++){
        aleatory_string += String.fromCharCode(Math.floor(Math.random() * 126) + 36 );
    }
    return aleatory_string;
}

function generateUnusedShort(){
    let s = generateShort();
    while (short_to_url[s]){
        s = generateShort();
    }
    return s;
}

function shorten(url){
    let s = generateUnusedShort(); 
    if(url_to_short[url]){
        return url_to_short[url];
    }
    short_to_url[s] = url;
    url_to_short[url] = s;
    return s;
}

function restore(s){
    return short_to_url[s];
}