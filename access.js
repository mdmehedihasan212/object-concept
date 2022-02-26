// get keys
const mamun = {
    job: 'bashundhara group',
    hight: 5.3,
    wight: 65,
    color: 'black'
}
const key = Object.keys(mamun);
console.log(key);
// get values
const mamuns = {
    job: 'bashundhara group',
    hight: 5.3,
    wight: 65,
    color: 'black'
}
const key2 = Object.values(mamuns);
console.log(key2);

// 
const mamunKhan = {
    proper: 'patuakhli',
    place: 'barishal',
    entire: 'santoor',
    body: 'savan'
}
const total = Object.entries(mamunKhan);
console.log(total);

// delete properties
// Object.seal(mamunKhan)
Object.freeze(mamunKhan)
mamunKhan.body = 'ten';
delete mamunKhan.body;
console.log(mamunKhan);

// seal properties
Object.seal(mamunKhan);
// modifer apply


// freez properties
Object.freeze(mamunKhan)
// do't change any properties