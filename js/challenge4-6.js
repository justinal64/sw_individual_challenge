// Write a Fibonacci number generator that outputs the numbers in the series that are less than 500.
// the sequence should go
/*
0 0
1 1
2 1
3 2
4 3
5 5
6 8
7 13
8 21
9 34
10 55
11 89
12 144
13 233
14 377
...*/

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

    // else if (i === 1 || i === 2) {
    //     trashVar = preNumber + i;
    //     console.log("preNumber + i = ", trashVar);
    //     i++;
    //     console.log("i = ", i);
    //     preNumber = trashVar;
    // } else {
    //     console.log("else statement");
    //     preNumber = i;
    //     console.log("preNumber = ", preNumber);
    //     i++;
    //     trashVar = preNumber + i;
    //     console.log("trashVar = ", trashVar);
    // }
}