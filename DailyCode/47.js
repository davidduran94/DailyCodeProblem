/**
 * 
 * Given a array of numbers representing the stock prices of a company in chronological order, 
 * write a function that calculates the maximum profit you could have made from buying and selling that stock once. 
 * You must buy before you can sell it.
 * For example, given [9, 11, 8, 5, 7, 10], you should return 5, 
 *since you could buy the stock at 5 dollars and sell it at 10 dollars.
 */

 /*
    MY SOLUTION  O(2N)
 */

function getItineraries(){
    let us =  [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']];
    let start = 'YUL';
    let result = [start];
    let i = 0;
    //find the starting point
    while(us.length > 0){
        if(us[i][0] === start) {
            start = us[i][1]; // Change the start for the next 
            result.push(us[i][1]); // put de destination on itineraries
            us.splice( i, 1 ); // remove destination from list
            i = 0;
        }
        else{
            i++;
        }
    }
    console.log(result);
}

 /*
    DOJO SOLUTION 
 
    

 */