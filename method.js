const student = {
    name: 'rj rasel',
    job: 'rj',
    station: 'radio foorti',
    isPoor: 'true',
    money: 5000,
    versitry: ['sapleza', 'mathbaria', 'barishal'],
    hobby: {
        num: 'playing cricket',
        num2: 'playing football',
        num3: 'swiming'
    },
    maramari: function () {
        console.log(this.name, 'is very honest person');
    },
    treatDey: function (expensive, booksis) {
        this.money = this.money - expensive - booksis
        return this.money;
    }
}
student.maramari();
const treating1 = student.treatDey(950, 100);
const treating2 = student.treatDey(550, 80);
console.log(treating2);

