// ES5
document.getElementById('button1').addEventListener('click', function(){
    window.alert("Ram");
})

//ES6 In es6 arrow function is used () => {  }
document.getElementById('button2').addEventListener('click' , () => {
    window.alert("Shyam");
})

var list = [1, 3]; // Define an array

// ES5
var list1 = list.map(function(x){
    return console.log(x * 2);
})

// ES6
const lists = [23,4,2,23];
let marks = lists.map((x) =>{   
    return console.log(x * 23);
});

const list33 = list.map( x => {
    return x * 3;
});

console.log(list33);



const list3 = list.map( x => x * 34); // return
console.log(list3);

// ES5
const btn = document.getElementById('button3');
const btn2 = document.getElementById('button4');
btn.addEventListener('click', function(){
    console.log(this.innerHTML);
});
// ES6 
btn2.addEventListener('click', () => {
    console.log(this.innerHTML)
})


// ES6
// document.getElementById('button4').addEventListener('click', () => {
//     console.log(this.innerHTML);
// });

//Another example:
//ES5
var player5 = {
    name: 'John',
    click: function(){
        var player = this;
        document.getElementById('button5').addEventListener('click', function(){
            window.alert(player.name);
        });
    }
};
player5.click();

//ES6
var player = {
    fname: 'Deepak',
    lname: 'Chaudhary',
    click: function(){
        document.getElementById('button6').addEventListener('click', () =>{
            window.alert(this.fname + " " + this.lname);
        });
    }
};
player.click();

document.write(" \n  " + player.fname + " " + player.lname);



