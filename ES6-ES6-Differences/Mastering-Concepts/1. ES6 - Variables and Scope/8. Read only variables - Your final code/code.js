//const MAKE; 
const MAKE = 'Apple';
console.log(MAKE);

MAKE = 'Samsung'; // Error Cannot Assign to Constant Variable.


{
    const MAKE = 'Ramesh kathiyavada';
    console.log(MAKE);
}
console.log(MAKE);

{
    const MAKE = 'Samsung';
    console.log(MAKE);
}

const LANGUAGE = { // object
    name: 'JavaScript',
    version: 'ES5'
};

LANGUAGE.version = 'ES6';
console.log(LANGUAGE.version);
console.log(LANGUAGE);
//error only if you do LANGUAGE = something