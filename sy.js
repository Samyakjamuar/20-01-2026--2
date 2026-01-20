let obj1={
    name:"samyak",
    class: 12,
    city:"gaya"
}

localStorage.setItem("student_data",JSON.stringify(obj1));  



let aby= JSON.parse(localStorage.getItem("student_data" ));
   
 
 console.log(aby);
 


 /*Part 1: Closure (5 Questions)

What is a closure in JavaScript?
Explain it in your own words without using a definition from a book.

Why are closures created in JavaScript?
What problem do they solve in real programs?

Look at this code and predict the output:

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const fn = outer();
fn();
fn();


Explain why this output happens.

How does closure help in data hiding / encapsulation?
Give a real-life example (like counter, private variable, etc.).

What is the difference between a normal function and a closure?
When does a function become a closure?

🔹 Part 2: Anonymous Function (5 Questions)

What is an anonymous function in JavaScript?
Why does it not have a name?

Can this code work? Why or why not?

function () {
  console.log("Hello");
}


Where are anonymous functions commonly used in JavaScript?
Name at least 3 real uses (interview favorite).

What will be the output?

setTimeout(function () {
  console.log("JavaScript");
}, 1000);


Why do we use an anonymous function here?

Difference between anonymous function and named function expression.
Which one is better for debugging and why?
*/


 function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const fn = outer();
fn();
fn();

function bankAccount() {
  let balance = 1000;

  return {
    getBalance: function () {
      return balance;
    },
    deposit: function (amount) {
      balance += amount;
    }
  };
}

const account = bankAccount();
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); 
