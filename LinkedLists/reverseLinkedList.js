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

LinkedList.prototype.print = function(){

    let currentNode = this.head;
    if(currentNode == null){
        return
    } else{
        while (currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }
}


LinkedList.prototype.reverseList = function(node){
    let prev = null;
    let current = node;
    let next = null;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return ;
}

var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
list.print();

list.reverseList(list.head)
