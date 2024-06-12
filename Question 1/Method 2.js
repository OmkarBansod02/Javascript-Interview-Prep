// Method 2: Using JSON.stringify()

function serializeToJSON(value) {
    return JSON.stringify(value);
}

// Testing the function
const testObj = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["HTML", "CSS", "JS"],
    wife: null
};

console.log(serializeToJSON(testObj));

