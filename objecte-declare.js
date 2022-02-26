// using literal
const panku = { names: 'jan pakhi', age: 30, status: 'love' }
console.log(panku.age);

// using constructor
const ringku = new Object('dada')
console.log(ringku);

// inheritance
const guru = Object.create(panku)
console.log(guru.age);

// classical object declare
class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peo = new people('tom hulk', 21)
console.log(peo);

class human {
    constructor(body, hand) {
        this.body = body;
        this.hand = hand;
    }
}
const suruj = new human('black', 2)
console.log(suruj);

// functional object declare syntactical sugar

function Total(hight) {
    this.hight = hight;
}
const properti = new Total(6);
console.log(properti);