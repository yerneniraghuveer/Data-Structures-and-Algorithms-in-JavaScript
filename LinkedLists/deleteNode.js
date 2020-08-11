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
LinkedList.prototype.deletefAtStart = function(){
    if(this.head == null){
       return this;
    }
    let firstElement = this.head;
    this.head = firstElement.next;
    return this.head;
}

LinkedList.prototype.deleteAtTail = function(){
    let firstElement = this.head;
    if(firstElement == null){
       return this;
    }

    while(firstElement.next.next !== null){
        firstElement = firstElement.next
    }
    firstElement.next = null

    return this.head;
}



var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);

list.deleteAtTail();

