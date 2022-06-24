let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName("Tom", "Sawyer"));

// 2nd best way to write it and then console log - let creatFullName = (firstName, lastName) => firstName + " " +lastName;

let someFunction = (a, b) => {
    let result = '';
    for (i = 0; i < b; i++) {
        result += a;
    }
    return result;
};

console.log(someFunction("Hello", 3))