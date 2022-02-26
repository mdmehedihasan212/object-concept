/*
for(let i=0; i>9; i++){}
for(const num of numbers){} apply on array
for(const num in numbers){} apply on object
*/

const mehedi = {
    job: 'bashundhara group',
    hight: 5.9,
    wight: 75,
    color: 'black'
};

const entries = Object.entries(mehedi);
console.log(entries);

// advance
for (const [keys, value] of Object.entries(mehedi)) {
    console.log(keys, value);
}