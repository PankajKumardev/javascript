const myarr = [1,2,3,4];
const myarr2 = new Array(5,6,7);
//array Methods
myarr2.push(8); 
// myarr2.push(9);
// console.log(myarr2);
// myarr2.pop();
// console.log(myarr2);
// myarr2.unshift(200);
// console.log(myarr2);
// myarr2.shift();

// console.log(myarr.includes(2));
// console.log(myarr2.indexOf(7));

const newarr =  myarr.join()
console.log(newarr);
for(i=1;i<=myarr.length;i++){
    console.log(myarr[i-1]);
}
for(i=1;i<=myarr2.length;i++){
    console.log(myarr2[i-1]);
}
const arrslice = myarr.slice(1,3);
console.log(arrslice);
const arrsplice = myarr2.splice(1,2);
console.log(arrsplice);
console.log("after splicing");
console.log(myarr2);