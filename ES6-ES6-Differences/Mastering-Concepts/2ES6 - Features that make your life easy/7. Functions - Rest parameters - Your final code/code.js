// ES5

function printAll(arguments) {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr.sort((a, b) => { return a - b; }).reverse();
}
console.log(printAll([2, 3, 4, 5, 6, 7, 3, 2]));

// ES6 using rest parameters

function printAll2(x, ...y) {
    console.log(x, ...y);
}
printAll2(1, 2, 3, 4, 5, 6, 7, 8);

//  Function pcheck firstname, lastname. 
//  Passenger: firstname, lastname.
//  Belongings: item1, item2, item3.

// ES6
{
    function setThings(firstname, lastname, ...items){
        let belongings = items.length ? items : 'none';
        console.log(`${firstname} ${lastname}`+ `
Belongings: [` + belongings + `]`)
    }
    setThings('Deepak', 'Chaudhary', 'American Tourist', ' Condom', ' Underwear');
}
// ES5

function pCheck2(firstname, lastname) {
    var z = Array.prototype.slice.call(arguments, 2);
    var belongings = z.length > 0 ? z : 'none';
    console.log('Passenger: ' + firstname + ' ' + lastname + '\n' + 'Belongings: ' + belongings);
}
pCheck2('Bill', 'Gates', 'BackPack', 'Suitcase');