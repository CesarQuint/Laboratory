//- Hash Table ,also know as hash map is a data structure of pair.values tha means key-value
//-JS Object is an specific implementation of this ,but it also adds some keys
//- Maps fit more in the description of the DS but it's good to know how to add this DS

//*Set to Store a Key-value pair
//*Get to retrieve a value given its key
//*Remove to delete a key value pair
//*Hashing function to convert a string key to a numeric number

class HashTable {
	constructor(size) {
		this.table = new Array(size)
		this.size = size
	}

	hash(key) {
		let total = 0
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i)
		}
		return total % this.size
	}

	set(key, value) {
		const index = this.hash(key)
		this.table[index] = value
	}

	get(key) {
		const index = this.hash(key)
		return this.table[index]
	}

	remove(key) {
		const index = this.hash(key)
		this.table[index] = undefined
	}

	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i])
			}
		}
	}
}
