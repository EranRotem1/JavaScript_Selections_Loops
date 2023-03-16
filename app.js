console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (i = 1; i <= 100; i++) 
{
    if (i % 2 != 0) 
    {
        console.log(`i`);
    }
}

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

for (i = 1; i <= 100; i++)
{
    if (i % 5 == 0 && i % 3 == 0) 
    {
        console.log(`FIZZBUZZ`);
    }
    else if (i % 5 == 0) 
    {
        console.log(`BUZZ`);
    }
    else if (i % 3 == 0) 
    {
        console.log(`FIZZ`);
    }
}

//Exercise 3
console.log("EXERCISE 3:\n==========\n");

//Exercise 1*

i = 1;
while (i <= 100) 
{
    if (i % 2 == 0) 
    {
        continue;
    }
    console.log('i');
    i++;
}

i = 1;
do {
    if (i % 2 != 0) 
    {
        console.log('i');
    }
    i++;
}
while (i <= 100)


//Exercise 2*

i = 1;
while (i <= 100) 
{
    if (i % 5 == 0 && i % 3 == 0) 
    {
        console.log(`FIZZBUZZ`);
    }
    else if (i % 5 == 0) 
    {
        console.log(`BUZZ`);
    }
    else if (i % 3 == 0) 
    {
        console.log(`FIZZ`);
    }
    i++;
}

i = 1;
do {
    if (i % 5 == 0 && i % 3 == 0) 
    {
        console.log(`FIZZBUZZ`);
    }
    else if (i % 5 == 0) 
    {
        console.log(`BUZZ`);
    }
    else if (i % 3 == 0) 
    {
        console.log(`FIZZ`);
    }
    i++;
}
while (i <= 100)


//Exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let Found = false;
for (i = 0; i <= n; i++) 
{
    if (i == value) 
    {
        console.log(`Found Value!`);
        Found = true;
        break;
    }
}
if (Found == false) 
{
    console.log(`Did not find value`);
}


//Exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++) 
{
    if (i % buzzDivisor == 0 && i % fizzDivisor == 0) 
    {
        console.log(`FIZZBUZZ`);
    }
    else if (i % buzzDivisor == 0) 
    {
        console.log(`BUZZ`);
    }
    else if (i % fizzDivisor == 0) 
    {
        console.log('FIZZ');
    }
}
