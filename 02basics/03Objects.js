 //Singleton
 //Object.create

 //Object Literals
const mysm = Symbol("Key1"); //symbol Declaration
 const jsUser = {
    name : "Pankaj Kumar",
    "age 2" : "18",
    location : "Delhi",
    email : "Pankaj@visualViewport.com",
    isLoggedin : false,
    lastLoginDays : ["Monday","Tuesday"],
    [mysm] : "key1"
 }

// console.log(jsUser.email);
// // console.log(jsUser.age 2); //show error
// console.log(jsUser["age 2"]);

// console.log(jsUser[mysm]);

// jsUser.email = "pankaj@vips";
// Object.freeze(jsUser);
// jsUser.email = "Pankaj@1234.com";
// console.log(jsUser);

jsUser.greeting = function () {
   console.log("Hello Js User");
} 
// console.log(jsUser.greeting());

jsUser.greeting2 = function(){
   console.log(`Hello Js User ${this.name} `);
}
jsUser.greeting();
jsUser.greeting2();