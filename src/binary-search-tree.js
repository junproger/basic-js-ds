const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	};
};

class BinarySearchTree {
	rootTree = null;
	root() {
		return this.rootTree;
	};
	add(data) {
		this.rootTree = addNewNodes(this.rootTree, data);
		function addNewNodes(node, data) {
			if (node === null) {
				return new TreeNode(data);
			} else if (node.data === data) {
				return node;
			} else if (node.data > data) {
				node.left = addNewNodes(node.left, data);
			} else if (node.data < data) {
				node.right = addNewNodes(node.right, data);
			};
			return node;
		};
	};
	has(data) {
		return searchData(this.rootTree, data);
		function searchData(node, data) {
			if (node === null) {
				return false;
			} else if (node.data === data) {
				return true;
			}else if (node.data > data) {
				return searchData(node.left, data);
			} else if (node.data < data) {
				return searchData(node.right, data);
			};
		};
	};
	find(data) {
		return findNode(this.rootTree, data);
		function findNode(node, data) {
			if (node === null) {
				return null;
			} else if (node.data === data) {
				return node;
			}else if (node.data > data) {
				return findNode(node.left, data);
			} else if (node.data < data) {
				return findNode(node.right, data);
			};
		};
	};
	remove(data) {
		this.rootTree = removeNode(this.rootTree, data);
		function removeNode(node, value) {
			if (node === null) {
				return null;
			} else if (node.data > data) {
				node.left = removeNode(node.left, data);
				return node;
			} else if (node.data < data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				};
				if (!node.left) {
					node = node.right;
					return node;
				};
				if (!node.right) {
					node = node.left;
					return node;
				};
				let maxLeft = node.left;
					while (maxLeft.right) {
					maxLeft = maxLeft.right;
				};
				node.data = maxLeft.data;
				node.left = removeNode(node.left, maxLeft.data);
				return node;
			};
		};
	};
	min() {
		let node = this.rootTree;
		if (node === null) {
			return null;
		} else {
			while (node.left) {
				node = node.left;
			};
		};
		return node.data;
	};
	max() {
		let node = this.rootTree;
		if (node === null) {
			return null;
		} else {
			while (node.right) {
				node = node.right;
			};
		};
		return node.data;
	};
};


module.exports = {
  BinarySearchTree
};
