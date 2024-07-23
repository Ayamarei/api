
 
 //!===================SUM OF NUMBERS======================

const numbers = [175, 50, 25,80];
function myFunc(total, num) {
    return total + num;
  }
console.log(numbers.reduce(myFunc)) ;



 //!===================MAX  NUMBER======================

let maxNum = Math.max(5, 10, 20, 15, 100, 50);
console.log(maxNum);


 //!===================REVERSE ARRAY======================
 

let frindes = ["aya", "asmaa", "mona", "eman", "doaa"];

console.log(frindes.reverse()); 


 //!===================NEW ARRAY======================


var num = [100, 100, 50, 80, 50, 30];

var newArrway = num.filter(function(element, index) {
  return num.indexOf(element) === index;
});

console.log(newArrway);



