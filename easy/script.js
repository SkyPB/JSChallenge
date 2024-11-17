// Understand what closure is
// Create a main function to hold exercise name and returns another function with the string
// Return the inner function

const exercise = function (exerciseName) {
  return function () {
    return `Today's exercise: ${exerciseName}`;
  };
};

const running = exercise("running");
const swimming = exercise("swimming");
const dancing = exercise("dancing");
const fencing = exercise("fencing");

console.log(running());
console.log(swimming());
console.log(dancing());
console.log(fencing());
