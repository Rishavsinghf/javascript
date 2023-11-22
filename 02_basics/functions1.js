function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("V");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result

}

const result = addTwoNumbers(3, 6)

// console.log("Result:" , result);

// addTwoNumbers(3, "6")

// addTwoNumbers(3, "a")
// addTwoNumbers(3, a)

function loginUserMessage(username) {
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rishav"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Rishav",
    price : 3445
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

const myNewArr = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArr));


