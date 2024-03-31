const typingDiv = document.getElementsByClassName('typing_effect');

// Convert the HTMLCollection to an array using Array.from or the spread operator
const typingArray = Array.from(typingDiv);

let i = 0;
const string = `The issue here is that getElementsByClassName returns an HTMLCollection, which represents a collection of elements. This collection doesn't have a text property like an individual DOM element does. 

To set the text for each element with the class 'typing_effect', you need to iterate through the collection and set the textContent property individually for each element.Here's an example:`;


let arr = string.split("");

setInterval(() => {
    if(i < arr.length){
        typingArray.forEach((element) => {
            element.textContent += arr[i]
        })
        i++;
    }else{
        return 0;
    }
}, 100)