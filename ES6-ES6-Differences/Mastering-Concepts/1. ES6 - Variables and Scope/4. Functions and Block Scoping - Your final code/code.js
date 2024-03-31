// // Create a separate scope first using a block
// {
//    greet(); // result -> hi
//    function greet(){
//        console.log('hi');
//    }
//    greet(); // result -> hi
   
//    {
//        function greet(){
//            console.log('There is something');
//        }
//        greet(); // There is something search in scope.
//    }
//    greet(); // Hi
   
// }

// greet();

// greet(); 
// function greet(){
//     console.log('Welcome'); // This result not get displayed.
// }
// greet();

// {
//     function greet(){
//         console.log('hello');
//     }
//     greet();// Hello
    
//     {
//         function greet(){
//             console.log('Hi there');
            
//         }
//         greet();
//     }

// }
// greet();

// {
//     function greet(){
//         console.log('hi hello');
//     }
// }

// greet();


{
    function ramp(){
        return console.log('Ram is Shayam, and Shayam is Ram');
    }
    ramp();
}
ramp();


{
    const ram = {
        fname: 'Ram',
        lname: 'Chaudhary',
        fullName: function(){
            return console.log(this.fname + " " + this.lname);
        }
    }
    ram.fullName();
}
