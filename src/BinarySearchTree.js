class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this
                    }
                    currentNode = currentNode.right;
                }
            }

        }

    }
    lookup(value) {
        if(this.root === null){
            return null;
        }
        let currentNode = this.root;
        while(true){
            if(value <currentNode.value){
                if(!currentNode.left){
                    return null;
                }
                if(value === currentNode.value){
                    return currentNode;
                }
                currentNode = currentNode.left;

            }else {
                if(!currentNode.right){
                    return null;
                }
                if(value === currentNode.value){
                    return currentNode;
                }
                currentNode = currentNode.right
            }

        }

    }
    delete() {

    }
}

const BST = new BinarySearchTree();
BST.insert(9);
BST.insert(4);
BST.insert(20);
BST.insert(1);
BST.insert(6);
BST.insert(15);
BST.insert(170);
//BST.insert();

console.log(JSON.stringify(teaverse(BST.root)));


function teaverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null : teaverse(node.left);
    tree.right = node.right === null ? null : teaverse(node.right);
    return tree;
}