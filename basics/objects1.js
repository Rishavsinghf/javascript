//  singleton => jab constructor se objectr banega tab singleton bnega 
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rishav",
    "fullname": "Rishav Singh",
    [mySym] : "myKey1",
    age: 21,
    location: "Bihar",
    email :"rishavg0621@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname);

JsUser.email = "rishav@chatgtp"
// Object.freeze(JsUser)
JsUser.email = "rishav@amazon"

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

console.log(JsUser.greeting);


