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

LinkedList.prototype.insertAtBeginning = function(data) {
    var newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
}

LinkedList.prototype.print = function(){
    let node = this.head;
    if(node == null){
        return
    }else {
        while(node !== null){
            console.log(node.data)
            node = node.next;
        }
    }
}

var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);

list.print()
// list.search(1)


