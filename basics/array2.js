const marvel_heros= ["thor","Ironman","spiderman"]

const dc_heros = ["superman", "flash", "aquaman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);



// spread operator =>[...xyz] 
const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);


// console.log(Array.isArray("Rishav"));
// console.log(Array.from("Rishav"));
// console.log(Array.from(23456)); => empty array


let score1 = 100
let score2 = 300
let score3 = 1600
console.log(Array.of(score1, score2, score3));

// console.log(...score1, ...score2, ...score3); => wrong