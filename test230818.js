/**
 * 
 * Good morning! Here's your coding interview problem for today.
 * This problem was asked by Uber.
 * Given an array of integers, return a new array such that each element at 
 * index i of the new array is the product of all the numbers in the original 
 * array except the one at i.
 * 
 * For example, if our input was [1, 2, 3, 4, 5], the expected output 
 * would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output 
 * would be [2, 3, 6].
 * 
 * Follow-up: what if you can't use division?
 * 
*/


//solution 1
const arr = [1,2,3,4,5,6]; 
function test(arr) { 
    let res = [];
    for (var i=0; i<arr.length-1; i++){
        acum = 1;
        for (var j=0; j<arr.length-1; j++){
            if(j==i){
                acum = acum * 1
            }
            else{
                acum = acum * arr[j]; 
            }
        }
        res[i] = acum; 
    }
    return res;
}

//solution 2
const arr = [1,2,3,4,5,6]; 
function test(arr) { 
    let res = [];
    acum = 1;
    for (var i=0; i<arr.length-1; i++){
        acum = acum * arr[i]; 
    }
    for (i=0; i<arr.length-1; i++){
        res[i] = acum/arr[i]; 
    }
    return res;
}