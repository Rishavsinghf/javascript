
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:" , a);

}





// console.log(a);
// conso/le.log(b);
// console.log(c);

function one() {
    const username = "Rishav"

    function two() {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website);

    two()
}

one()



function addone(num) {
    return num + 1
}

console.log(addone(5));



const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(4));