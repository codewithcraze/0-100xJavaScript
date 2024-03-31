//ES5
var x = 1;
var y = 2;

//ES6
const [a, b] = [3, 4];

console.log(a);
console.log(b);

// Process return values in array format
function processString(x){
    return [x, x.length];
}

console.log(processString('hello'));

//result
//value = result.value
//length = result.length

const [value, length] = processString('hello');
console.log(value);
console.log(length);

// swap values of two variables
// var c = 1;
// var d = 2;
// ES5
// var e = c;
// c = d;
// d = e;
// console.log(c, d);

let [c, d] = [1, 2];
[c, d] = [d, c];
console.log(c, d);

// Default values
let list = ['London', 'England'];
let [city, country = 'USA'] = list; // if value not exists then USA get set.
console.log(city, country);

// ES5
// var city = list[0];
// var country = list[1] === undefined ? 'USA' : list[1];
//console.log(city, country);



function process(x){
    return [x, x.length];
}

console.log(process('DeepakChaudhary'));

const [values, lengths] = process('DeepakChaudhary');
values;
lengths;

{
    const [a, b, c, d, e, f ,g, h] = [1,2,3,4,5,6,7,8];
    console.log(a);console.log(b);console.log(c);console.log(d);console.log(e); console.log(f);console.log(g);console.log(h);
}

{
    const [ values, length] = process('Ram Prashad chaurasiya');
    function process(x){
        return [x, x.length];
    }
    console.log(values, length)
}