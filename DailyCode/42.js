/**
 * 
 *  This problem was asked by Google.
 *  Given a list of integers S and a target number k, write a function that returns 
 *  a subset of S that adds up to k. 
 *  If such a subset cannot be made, then return null.
 *  Integers can appear more than once in the list. You may assume all numbers in the list are positive.
 *  For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, 
 *  return [12, 9, 2, 1] since it sums up to 24.
 * 
 */



/*
    MY SOLUTION
*/

function comparar ( a, b ){ return a - b; }

function getSubset(){
    let S = [12, 1, 61, 5, 9, 2];
    let SO = S.sort(comparar);
    console.log(SO);
    let k = 24;

}





 /*
   DOJO SOLUTION 
 */

