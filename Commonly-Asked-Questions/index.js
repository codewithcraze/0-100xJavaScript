function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;

  // Insert at a specified position
  this.insertAtPosition = function (data, position) {
    const newNode = new Node(data);
    if(position == 0){
      newNode.next = this.head;
      this.head = newNode;
    }else{
    let currentPosition = 0;
    let current = this.head;
    let previous = null; 

    while(current && currentPosition < position){
      previous = current; 
      current = current.next; 
      currentPosition++;
    }

    if(currentPosition === position){
      newNode.next = current;
      previous.next = newNode;
    }
  };

}
}

// Example usage:
const myList = new LinkedList();

myList.insertAtPosition(1, 0); // Insert at the beginning
myList.insertAtPosition(1, 0); // Insert at the beginning


console.log(myList.head)


