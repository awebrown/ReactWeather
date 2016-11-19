//
// //the forEach function runs for every element of array
// //take three args, i = element; j = index; k = array
// names.forEach((name) => console.log(name));
//
//
// let returnMe = (name) => name + '!';
// console.log(returnMe('Tony'));


//You can use arrow functions in place of anonymous functions,
//But there is one major difference. Anonymous functions have
// a 'this' binding, while arrow functions take on their
//parent's 'this' binding.
//here the anon function refers to a 'this' but one has not been
//defined in its block.
// let personAnon = {
//   name: 'Tony',
//   greet: function() {
//     names.forEach(function(name) {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// //here the parent function's 'this' is personArrow
// let personArrow = {
//   name: 'Tony',
//   greet: function() {
//     names.forEach((name) => console.log(this.name + ' says hi to ' + name));
//   }
// };
//
// personAnon.greet();
// personArrow.greet();


// function add(a, b){
//   return a + b;
// }

// let addStatement = (a, b) => {
//   return a + b;
// }
//
// let addExpression = (a, b) => a + b;
//
// console.log(addStatement(1,3));
// console.log(addExpression(9,0));
