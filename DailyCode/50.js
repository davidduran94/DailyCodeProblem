/**
 * 
 *  This problem was asked by Microsoft.
    Suppose an arithmetic expression is given as a binary tree.
    Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.
    Given the root to such a tree, write a function to evaluate it.
    For example, given the following tree:

      *
     /  \
    +    +
   / \  / \
  3  2  4  5

  You should return 45, as it is (3 + 2) * (4 + 5).
 * 
 */

 /*
    MY SOLUTION  O()
 */

class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

var treeBinary = new Node();
treeBinary.data = "*";
treeBinary.right = new Node({data: "+",  right:5, left: 4});
treeBinary.left = new Node({data: "+",  right:3, left: 2});

function solveEquation(node){
    if(typeof node.right == "object" | typeof node.right == "object"){
        solveEquation(node.right)
    }


}
function getResult(treeBinary){
    solveEquation(treeBinary);
}

 /*
    DOJO SOLUTION 
 
    
 */