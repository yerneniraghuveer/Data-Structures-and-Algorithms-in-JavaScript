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

LinkedList.prototype.nthNodeFromEnd = function(n){
    let main_ptr = this.head;
    let ref_ptr = this.head;
    let count = 0;

    if(this.head !== null){
        while(count < n){
            if(ref_ptr == null){
                return
            }
            ref_ptr = ref_ptr.next;
            count++;
        }
        while (ref_ptr !== null) {
            main_ptr = main_ptr.next;
            ref_ptr = ref_ptr.next
        }
        return main_ptr.data;
    }

}



var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);

list.nthNodeFromEnd(2);

