//                   store and copy by reference
/*
primitive data type

let num = 10;

let age = num;

console.log(num, 'age =', age); */

//                    store by reference

/* let sayhi = {
    greeting : 'hello',
}

let Greeting = sayhi

sayhi['name'] = 'ram'

console.log(Greeting.name);

console.log(Greeting === sayhi); */

//                  cloning and merging object

/* 
let user = {
    name : 'chethan',
    age : 20,
}

let clone = {}

for (let key in user){
    clone[key] = user[key]
}

console.log(clone);

clone.name = 'chidananda'

console.log(clone.name,'user obj ',user); */



//               --- using object.assign ---


/*

let user = { name: 'chethan' };

let permission1 = { canView: true }
let permission2 = { canEdit: true }

Object.assign(permission1, permission2, user);

console.log('canEdit' in permission1); */


//         --- structure cloning ---

// let user = {
//     user_name : 'harry',
//     age : 20,
//     movie : {
//         numbers_movies : 10,
//         hero : true,
//     }
// }


// let clone = structuredClone(user)

// console.log(clone === user);
