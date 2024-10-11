//  falsy values

// all outputs are FALSE
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

// more examples

// 0 is a Falsy value so it outputs the else part
let money = 0;

if (money) {
    console.log("Its TRUE");
}
else {
    console.log("Its FALSE");
}

// height is undefined so it outputs the else part
let height;

if (height) {
    console.log("Its TRUE");
}
else {
    console.log("Its FALSE");
}

