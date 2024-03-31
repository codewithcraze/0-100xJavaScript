function Node(data){
    this.data = data;
    this.next = null;
}

function LinkedList(){
    this.head = null;

    this.insertAtPosition = function (data, position){
        let newNode = new Node(data);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        let currentPosition = 0;
        let previous = null; 
        let current = this.head;
        while(current && currentPosition < position){
            previous = current;
            current = current.next;
            currentPosition++;
        }
        if(currentPosition === position){
            newNode.next = current;
            previous.next = newNode;
        }
    }
}

const insert = new LinkedList();

insert.insertAtPosition(23, 0);
insert.insertAtPosition(23, 0);
console.log(insert.head);