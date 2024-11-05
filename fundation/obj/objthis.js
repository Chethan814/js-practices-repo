// let user = {
//     sayhi : function(){
//         console.log('hi');
//     }
// }

// console.log(user);
// user.sayhi()


// let user = { }

// user = {
//     sayhi(){
//         console.log('hello');
//     }
// }
// user.sayhi()

// let user = {
//     arr_name: ['chethan', 'chida', 'balaji', 'chandan', 'abhishak'],
//     sayhi() {
//         for (let i = 0; i <= this.arr_name.length; i++) {
//             let name = 'chandan'
//             if (this.arr_name[i] === name) {
//                 console.log(i);
//             }
//         }

//     }
// }

// user.sayhi()





// let user = {name : 'chethan'}
// let admin = {name : 'chida'}

// function sayhi(){
//     console.log(this.name);
// }

// user.fuc = sayhi;
// admin.fuc = sayhi;

// user.fuc()
// admin.fuc()

// function sayhi(){
//     console.log(this);
// }

// sayhi()


// function sayhi(name){
//     console.log(new.target,name);
// }

// let user =  sayhi('hi')

// user.sayhi


// function User(name) {
//     this.name = name;

//     this.sayHi = function () {
//         console.log("My name is: " + this.name);
//     };
// }

// let john = new User("");

// john.sayHi("")





let user = {
    name: {
        first_name: 'chethan',
        secnd_name : {
            fir_letter : 'K',
            sec_letter : 'R',
        }
    },
    secound_name: "K R"
}

let realname = user.name?.secnd_name?.sec_letter;
console.log(realname);