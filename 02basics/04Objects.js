// const ytUser = new Object() singleton 

const ytuser = {
    id: "123abc",
    name : "Samay",
    islogged : false
}
// console.log(ytuser);

const regularUser = {
    email : "random@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Samay",
            lastName : "Rana"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const Allobj = {...obj1,...obj2};
// console.log(Allobj[1]);

const data1 = [
    {
        id : 1,
        name:"pankaj"
    },
    {
        id : 2,
        name:"sohan"
    },
    {
        id : 3,
        name:"ram"
    }
]
// console.log(data1[1].name);

// console.log(Object.keys (ytuser));
// console.log(Object.values (ytuser));
// console.log(Object.entries(ytuser));
// console.log(ytuser.hasOwnProperty("islogged"));
