// using literal
const panku = { names: 'jan pakhi', age: 30, status: 'love' }
console.log(panku.age);

// using constructor
const ringku = new Object('dada')
console.log(ringku);

// inheritance
const guru = Object.create(panku)
console.log(guru.age);
