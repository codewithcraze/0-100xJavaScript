//ES6
const person = {
    name: 'John',
    age: 41
};



const { name: n, age: a } = person;
// window.alert(n, a);
console.log(n, a);

console.log(person.name + " " + person.age);

//window.alert(person);

//deep matching
const {
    country: c,
    address:
    { postcode: p, housenumber: hn }
}
    =
{
    country: 'Deepak Chaudhary',
    address:
        { postcode: '203001', housenumber: 'M-202' }
};
console.log(c, p, hn);

//same as {name:name, age:age}
const { name, age } = person;
console.log(name, age);

//default values
const obj = { city: 'London', country: 'UK' }
const { city, country = 'USA' } = obj;
console.log(city, country);
//ES5
//if(obj.country === undefined){}else{}

function processString(x) {
    return { value: x, length: x.length }
}
const { value, length } = processString('hello');
console.log(value, length);


{
    function process(x) {
        return { values: x, length: x.length };
    }
    const { values, length } = process('Ramesh');
   console.log(values, length);
}