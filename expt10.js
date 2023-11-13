const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", (numberInput) => {
    const number = parseInt(numberInput);
    if (!isNaN(number)) {
        console.log(`Table of ${number}:`);
        let i = 1;
        console.log(`Using While loop :`);
        while(i !=11){
            console.log(`${number} x ${i} = ${number * i}`);
            i++;
        }
        i =1;
        console.log(`Using do while loop :`);
        do{
            console.log(`${number} x ${i} = ${number * i}`);
            i++;
        }while(i !=11)
        rl.close();
    } 
    else {
        console.log("Invalid input. Please enter a valid number.");
        rl.close();
    }
});