/*

this: reference to an object

4 Rules to 'this'. How is it called?

1) in the global context (global object, undefined in strict mode)
2) as a method on an object (object on left side of dot)
3) as a constructor function or class constructor (the instance itself with new)
4) as a DOM event handler (the element itself)

*/

// function whatIsThis() {
// //   console.log(this);
//  this.something = 2;
//  console.log(something);
// }

// whatIsThis();

// const user = {
//   first: 'Reed',
//   last: 'Barger',
//   greetUser() {
//     console.log(`Hi, ${this.first} ${this.last}`);  
//   }  
// }

// const userInfo = {
//   title: "Programmer",
//   user: {
//      first: 'Reed',
//      last: 'Barger',
//      greetUser() {
//       console.log(`Hi, ${this.first} ${this.last} ${this.title}`);  
//      }   
//   }  
// }

// userInfo.user.greetUser()

// class User {
//   constructor(first, age) {
//     this.first = first;
//     this.age = age;  
//   }  
  
//   getAge() {
//     console.log(`${this.first}'s age is ${this.age}`);  
//   }
// }

// const user = new User('Bob', 24);
// user.getAge();

// function User(first, age) {
//   this.first = first;
//   this.age = age;
// }

// User.prototype.getAge = function() {
//   console.log(`${this.first}'s age is ${this.age}`);  
// }

// const user2 = new User('jane', 25);
// user2.getAge();

// const button = document.createElement('button');
// button.textContent = "Click";
// document.body.appendChild(button);

// button.addEventListener('click', function() {
//   console.log(this);
// })

// call(), apply(), bind()

// const user = {
//   name: "Reed",
//   title: "Programmer"  
// }

// function printUser() {
//   console.log(`${this.name} is a ${this.title}`);
// }

// const userDescription = printUser.bind(user);

// const user2 = {
//   name: "Doug",
//   title: "Entrepreneur"  
// }

// printUser.bind(user2)

// userDescription();

const user = {
  first: 'Bob',
  fn() {
     console.log(this.first); 
  },
  arrowFn: () => {
    console.log(this.first);  
  }
}

user.arrowFn();