const BASKET = ['strawberry', 'apple', 'yogurt', 'bread'];


//iteration
for(const x of BASKET){
    console.log(x);
}

let Iterators = document.getElementById("Iterators");
for (const x of BASKET) {
    Iterators.innerHTML += String(x).toUpperCase() + " <br/> ";
}


const arrIt = BASKET.values();

//let arrIt = BASKET.keys();
console.log(arrIt);
console.log(JSON.stringify(arrIt.next().value));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));


{
    const arr = [1,2,3,4,5,6,7,8];
    const array = arr.values();
    console.log(JSON.stringify(array.next()));
    console.log(JSON.stringify(array.next()));
    console.log(JSON.stringify(array.next()));
    console.log(JSON.stringify(array.next()));
    console.log(JSON.stringify(array.next()));
    console.log(JSON.stringify(array.next()));
    console.log(JSON.stringify(array.next()));
    console.log(JSON.stringify(array.next()));
    console.log(JSON.stringify(array.next()));
}
// Let's create a function that makes an iterator out of an array
const createIterator = (array) => {
    let index = 0;
    return {
        next(){
            if(index < array.length){
                return{
                    value: array[index++],
                    done: false
                }
            }else{
                return {
                    done: true
                }
            }
        } 
    };
};

const arrIt2 = createIterator([1,2,3]);
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());


//generator functions: factory of iterators

function* genIterator(){
    console.log('running');
    yield 1; //pause generator
    console.log('running');
    yield 2;
}
const it = genIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());


