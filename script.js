// Part 1: Variable declarations and conditionals
let name = "Morine";
let age = 20;

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// Part 2: At least 2 custom functions
function greetUser() {
  document.getElementById("output").innerHTML = "Hello, " + name + "!";
}

function calculateSum(a, b) {
  return a + b;
}

// Part 3: At least 2 loop examples
function showList() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let result = "<ul>";

  // For loop
  for (let i = 0; i < fruits.length; i++) {
    result += "<li>" + fruits[i] + "</li>";
  }
  result += "</ul>";

  // While loop
  let i = 1;
  result += "<p>Counting using while loop: ";
  while (i <= 5) {
    result += i + " ";
    i++;
  }
  result += "</p>";

  document.getElementById("output").innerHTML = result;
}

// Part 4: At least 3 DOM interactions
document.getElementById("greetBtn").addEventListener("click", greetUser);
document.getElementById("sumBtn").addEventListener("click", function() {
  let total = calculateSum(10, 20);
  document.getElementById("output").innerHTML = "The sum is: " + total;
});
document.getElementById("listBtn").addEventListener("click", showList);