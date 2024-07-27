// let name = 'chethan';
// let age = 20;
// const dob = '2003-5-1'

// let obj = {
//     name : 'chethan',
//     'age of user' : 20,
//     dob : '2003-05-01'
// }

// console.log(obj['age of user']);

// factor function

// function cur_user(name,age,dob){
//     return {
//         name : name,
//         age : age,
//         dob : dob,
//     }

// }

// let key = 'user links';
// let user = {};
// user[key] = true;

// console.log(user[key]);

// let obj = {}

// console.log(obj === undefined);




// let obj = {
//     name: 'chidananda',
//     age: '20',
//     dob: {
//         day: 2,
//         month: 5,
//         year: 2003,
//     }
// }

// for (let key in obj) {
//     if (key === 'dob') {
//         console.log(obj[key].day);
//     }
// }

// let obj = {
//     '91': 'india',
//     '1':'usa',
// }

// for (let key in obj){
//     console.log(key);
// }

// let fruit = 'apple';

// let obj ={
//     [fruit] : 5,
// }

// console.log(obj);


// function makeruser(name,age){
//     return{
//         name,
//         age,
//     }
// }

// let user = makeruser('chethan', 20);

// console.log(user);


let user = {
    user_name: 'rohit sharma ',
    user_age: 30,
    
}

let clone = structuredClone(user)

console.log(clone.user_age ,user.user_age);

