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

LinkedList.prototype.search = function(data){
    var currentNode = this.head;
    if(currentNode.next == null){
        if(currentNode.data == data){
            console.log('found');
            return true;
        }
    }
    while(currentNode.next !== null){
        if(currentNode.data == data){
            console.log('found')
            return true;
        }
        currentNode = currentNode.next;
    }
    console.log('not found');
    return false;

}

var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);

list.search(1)


