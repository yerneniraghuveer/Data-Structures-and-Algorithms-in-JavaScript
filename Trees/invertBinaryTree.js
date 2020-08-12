// invert a binary tree 
// example Input: [4,2,7,1,3,6,9] Output :[4,7,2,9,6,3,1]
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

    insert(data) {
        let newNode = new Node(data);

        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }

    }

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            } else  {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right == null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }

    }

    invertBinaryTree(node){
        if(!node) return node; 

        const left = this.invertBinaryTree(node.left);
        const right = this.invertBinaryTree(node.right);

        node.left = right;
        node.right = left;
        return node;
    }
}

var BST = new BinarySearchTree();

BST.insert(4);
BST.insert(2);
BST.insert(7);
BST.insert(1);
BST.insert(3);
BST.insert(6);
BST.insert(9);


var root = BST.getRootNode();

BST.invertBinaryTree(root);