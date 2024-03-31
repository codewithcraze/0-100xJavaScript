// let count = 0; 
// for(var i = 0; i < 3; i ++){
//    document.getElementById(i).addEventListener('click', function(){
//        document.getElementById("heading").innerHTML = `Let's Learn JavaScript ${count}`;
//        count++;
//    })
// }

// Solution in ES5: use a closure
// var f = function(x){
//    return function(){
//        if(x === 0){
//         alert('Working');
//        }else{
//         console.log('Not Working')
//        }
//    }
// }

// for(var i = 0; i < 3; i ++){
//    document.getElementById(i).addEventListener('click', f(i))
// }



// Now try with let:

for(let i = 0; i < 3; i ++){
    document.getElementById(i).addEventListener('click', function(){
        window.alert(i);
    })
}