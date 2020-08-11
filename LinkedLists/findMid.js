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

LinkedList.prototype.findMid = function() {
    if (this.head == null) {
        return
    }

    let slowPointer = this.head;
    let fastPointer = this.head;

    while(slowPointer && fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    console.log(slowPointer.data);
    return slowPointer;
}



var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);

list.findMid()

