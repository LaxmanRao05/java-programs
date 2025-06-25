// controll flow in Java
let age=18;
if(age <18){
    console.log("You are a minor.");
}
else if(age >= 18 && age < 65){
    console.log("You are an adult.");
}
else{
    console.log("You are a senior citizen.");
}

// switch case example
let day = 3; 
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

}
// for loop example
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
// while loop example
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}
