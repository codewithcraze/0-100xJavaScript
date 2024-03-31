// Traditional for

for(let i = 0; i < 3; i ++){
    console.log(i);
}

for(let i = 0; i < 3; i ++){
    if(i === 2){
        break;
    }
    console.log(i);
}

// forEach
const CARMAKES = ['Audi', 'BMW', 'Ford'];
CARMAKES.forEach((element, index) => {
    console.log(`Make ${index + 1}: ${element}`);
});


// let see how forEach Function works.
const carmaker = ['Ramcharan', 'RamRaghav', 'Srinivasan', 'Kallmadalamma'];
carmaker.forEach((element, index) => {
    console.log(`${index + 1 } Manufacturer: ${element}`);
})

//ES6 for of:
for (const x of CARMAKES){
    console.log(x);
}