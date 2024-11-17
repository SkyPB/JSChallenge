// Understand closures
// Create an object within the closure that contains the sensitive information
// Create a function to only return the name property of the object

const createPII = function () {
  const PII = {
    name: "John",
    ssn: 123 - 45 - 6789,
  };

  return {
    getName: function () {
      return PII.name;
    },
  };
};

const patient2 = createPII();

console.log(patient2.name);
console.log(patient2.ssn);
console.log(patient2.getName());
