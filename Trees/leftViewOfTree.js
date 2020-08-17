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

    leftView(root){
        if(!root) return;
        let queue = [root];
        let res = [root.data];
        while(queue.length !== 0){
            let next = [];
            while(queue.length !== 0){
                let node = queue.shift();
                if(node.left) next.push(node.left);
                if(node.right) next.push(node.right);
            }
            if(next[0]) res.push(next[0].data)
            queue = node;
        }
        return res;
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

BST.leftView(root);
