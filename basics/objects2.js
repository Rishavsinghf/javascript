// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Rishav",
            lastname: "Singh"

        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "A", 4: "B"}
const obj4 = {5: "A", 6: "B"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "r@gmail.com",
    },
]

// users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));
// console.log(tinderUser.regularUser);