//ES5
function f(arr){
    console.log('hello ' + arr[0] + ' ' + arr[1]);
}
f(['Bill', 'Gates']);

// ES6
// Parameter matching and priting.
function g([firstname, lastname]){
    console.log(`hello ${firstname} ${lastname} !`);
}
g(['Bill', 'Gates']);

// |------------------------ Parameter Matching------------------------|

{
    function g(arr){
        console.log(' Hello ' + arr[0] + ' ' +arr[1] + ' ' + arr[2] );
    }
    g(['Ram', 'Prashad', 'Chaurashiya']);
}
{
    let g = ([firstname, secondname, lastname]) => {
        console.log(`Hello ${firstname} ${secondname} ${lastname}`);
    }
    g(['Ram', 'Prashad', 'Chaurashiya']);
}


// putting object in function.
function h({firstname, lastname}){
    console.log(`hello ${firstname} ${lastname} !`);
}
h({firstname: 'Ohh my', lastname: 'God'});




function tcs([firstname, lastname]){
    console.log(`Hello ${firstname} ${lastname} !`);
}

console.log(tcs(['Deepak ', 'Chaudhary']));