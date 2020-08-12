class Node{
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    getRootNode(){
        return this.root;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left == null){
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right == null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    
    findMinimumNode(node) {
        if(node.left === null){
            console.log(node.data)
        } else {
            return this.findMinimumNode(node.left)
        }
    }
}

var bst = new BinarySearchTree();

bst.insert(8);
bst.insert(5);
bst.insert(4);
bst.insert(3);
bst.insert(9);
bst.insert(10);
bst.insert(7);
var root = bst.getRootNode();

bst.findMinimumNode(root);