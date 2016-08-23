// Write a Fibonacci number generator that outputs the numbers in the series that are less than 500.
// the sequence should go

var counter = 0;
var preNumber = 0;
var trashVar = 1;

// use a for loop to add the numbers
for(var i = 0; i <= 500;) {
    if (i === 0) {
        console.log(i + preNumber);
        i++;
    } else if (i <= 1) {
        console.log(i);
        preNumber = i;
        console.log(preNumber);
        i++;
    } else if (i <= 2) {
        console.log(i);
        preNumber = i;
        i++;
        console.log(i);
    } else {
        trashVar = i + preNumber;
        preNumber = i;
        i = trashVar;
        if(i <= 500) {
            console.log(i);
        }
    }
}