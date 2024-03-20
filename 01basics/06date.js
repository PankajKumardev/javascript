let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString())
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
console.log(typeof myDate);

let newDate = new Date(2024,1,23)
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());
let timestamp = Date.now();
// console.log(timestamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate1 = new Date();
console.log(newDate1)
console.log(newDate1.getDate());
console.log(newDate1.getFullYear()); 
newDate1.toLocaleString('default',{
      dateStyle:"medium" 
})