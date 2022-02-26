const rasel = {
    id: 101,
    name: 'rj rasel',
    age: 30,
    job: 'jokey',
    office: 'dhaka',
    money: 5000,

    treatDey: function (expensive) {
        this.money = this.money - expensive
        console.log(this);
        return this.money;
    }

};

rasel.treatDey(150);


const mehedi = {
    id: 102,
    name: 'md mehedi',
    age: 26,
    job: 'bashundhara group',
    money: 5000

}
const mehediTreadDey = rasel.treatDey.bind(mehedi);
mehediTreadDey(500);