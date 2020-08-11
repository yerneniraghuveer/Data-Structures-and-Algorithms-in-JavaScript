class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
}

LinkedList.prototype.insertAtTail = function(data){
    var newNode = new Node(data);
    if(this.head == null){
        this.head = newNode;
        return this.head
    }
    let currentNode = this.head
    while(currentNode.next !== null){
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this.head;
    
}

LinkedList.prototype.detectLoop = function() {
    if (this.head == null) {
        return
    }

    let slowPointer = this.head;
    let fastPointer = this.head;

    while(slowPointer && fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if(slowPointer.data == fastPointer.data){
            console.log('loop found');
            return true;
        }

    }
    console.log('loop not found');
    return false;
}



var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);

list.head.next.next.next = list.head

list.detectLoop();

