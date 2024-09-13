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
let BMIMark , BMIJohn;

// Mark BMI
BMIMark  = massMark / (heightMark ** 2);

// John BMI
BMIJohn = massJohn / (heightJohn ** 2);

// Consoling results
console.log("Mark's BMI : ", BMIMark)
console.log("John's BMI : ", BMIJohn)

// Higher BMI
if(BMIMark > BMIJohn) {
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

BMIMark  = massMark / (heightMark ** 2);

// John BMI
BMIJohn = massJohn / (heightJohn ** 2);

// Consoling results
console.log("Mark's BMI : ", BMIMark)
console.log("John's BMI : ", BMIJohn)

// Higher BMI
if(BMIMark > BMIJohn) {
    console.log("Mark got the higher BMI")
}
else{
    console.log("John got the higher BMI")
}