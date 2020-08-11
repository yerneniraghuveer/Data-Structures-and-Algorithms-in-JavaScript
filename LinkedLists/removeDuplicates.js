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

LinkedList.prototype.removeDuplicates = function(){
    if(!this.head || !this.head.next){
        return this.head;
    }

    let node = this.head;
    while(node.next !== null){
        if(node.data == node.next.data){
            node.next = node.next.next
        } else {
            node = node.next;
        }
    }
    return this.head;
}



var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(2);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(4);
list.insertAtTail(5);

list.print();

list.removeDuplicates();

