
let num1 = parseInt(prompt("Enter First number"));
let operators = prompt("Enter operation to perform");
let num2 = parseInt(prompt("Enter Second number"));

if(operators === '+'){
    alert("Your Result is = " + (num1 + num2));
} else if(operators === '-'){
    alert("Your Result is = " + (num1 - num2));
} else if(operators === '*'){
    alert("Your Result is = " + (num1 * num2));
} else if(operators === '/'){
    alert("Your Result is = " + (num1 / num2));
}
else{
    alert("Incorrect input. Please try again")
}