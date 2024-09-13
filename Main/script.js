console.log("---Data1---");

let massMark, heightMark, massJohn, heightJohn;
// Data 1
// Mark Data
massMark = 78;
heightMark = 1.69;

// John Data
massJohn = 92;
heightJohn = 1.95;

// BMI
let bmiMark, bmiJohn;

// Mark BMI
bmiMark = massMark / (heightMark ** 2);

// John BMI
bmiJohn = massJohn / (heightJohn ** 2);

// Consoling results
console.log("Mark's BMI : ", bmiMark)
console.log("John's BMI : ", bmiJohn)

// Higher BMI
if(bmiMark > bmiJohn) {
    console.log("Mark got the higher BMI");
}
else{
    console.log("John got the higher BMI");
}

console.log("---Data2---");

// Data 2
// Mark Data
massMark = 95;
heightMark = 1.88;

// John Data
massJohn = 85;
heightJohn = 1.76;

// Consoling results
console.log("Mark's BMI : ", bmiMark)
console.log("John's BMI : ", bmiJohn)

// Higher BMI
if(bmiMark > bmiJohn) {
    console.log("Mark got the higher BMI")
}
else{
    console.log("John got the higher BMI")
}