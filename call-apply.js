const rasel = {
    id: 101,
    name: 'rj rasel',
    age: 30,
    job: 'jokey',
    office: 'dhaka',
    money: 5000,

    treatDey: function (expensive, boksis, tax) {
        this.money = this.money - expensive - boksis - tax
        console.log(this);
        return this.money;
    }

};

const mehedi = {
    id: 102,
    name: 'md mehedi',
    age: 26,
    job: 'bashundhara group',
    money: 5000

}

rasel.treatDey.call(mehedi, 500, 100, 50)
rasel.treatDey.apply(mehedi, [500, 100, 50])
