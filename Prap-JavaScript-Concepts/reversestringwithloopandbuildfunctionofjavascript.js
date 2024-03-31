// Reverse an string in javascript.
// String is 'Hy this is Deepak Chaudhary';
function reverse(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverse2(str) {
  //check for valid input
  return str.split('').reverse().join(''); // convert string into an array 
  // Reverse make the array reverse
  // It again join an array to form string
}



const reverse3 = str => [...str].reverse().join('');

reverse('Timbits Hi')
reverse('Timbits Hi')
reverse3('Timbits Hi')