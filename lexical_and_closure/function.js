// function createFunction() {
//   function f(a, b) {
//     const sum = a + b;
//     return sum;
//   }
//   return f;
// }
// console.log(createFunction(2,3));
// const f = createFunction();
// console.log(f(3, 4)); // 7

function func1(a) {
  console.log(arguments[0],'a',a);

  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

// func1(1,3,4);

// function longestString() {
//   let longest = "";
//   for (let i = 0; i < arguments.length; i++) {
    
//     longest += arguments[i];
//   }
//   return longest;
// }

console.log(longestString());
