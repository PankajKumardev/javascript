const marvel_hero = ["IronMan","thor","Spiderman"];
const DC_hero = ["superman","batman","flash"];

// marvel_hero.push(DC_hero);
// console.log(marvel_hero);

// const concatarr = marvel_hero.concat(DC_hero)
// console.log(concatarr);

//using Spread

const All_heros = [...marvel_hero,...DC_hero];
// console.log(All_heros);

const anotherArr = [22,[2,3,4,6],3,[3,4],1,2,3,4,[23,32,222,221,134,4,2]];
const realAnotherArr = anotherArr.flat(Infinity);
// console.log(realAnotherArr);

console.log(Array.isArray("pankaj"));
console.log(Array.from("pankaj"));
console.log(Array.from({name:"Pankaj"})); //intersting

score1 = 10;
score2 = 20;
score3 = 30;
console.log(Array.of(score1,score2,score3))