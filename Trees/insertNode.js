class Node {
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

        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(12);
BST.insert(3);
BST.insert(4);
BST.insert(7);
BST.insert(9);
BST.insert(10);
BST.insert(65);
BST.insert(43);
BST.insert(90);
BST.insert(67);

var root = BST.getRootNode();
console.log(root);