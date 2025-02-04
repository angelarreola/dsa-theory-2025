// The easy way to create an array in JavaScript, we are going to build one from scratch.
// const a = [];

class MyArray {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.lenght] = value;
    this.lenght++;
    return this.lenght;
  }

  pop() {
    const lastItem = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1];
    this.lenght--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    this.lenght--;
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.lenght - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.lenght - 1];
  }
}

const myArray = new MyArray();
//? Watch the empty object.
console.log(myArray);

myArray.push(1);
//? Now watch the object with the value 1 in the index 0.
console.log(myArray);

myArray.push(3);
myArray.push(5);
myArray.push(7);
myArray.push(9);
myArray.push(11);

//* And now with multiple values.
console.log(myArray);
console.log("------------------");

console.log("last item deleted: ", myArray.pop());
console.log("last item in the array: ", myArray.get(myArray.lenght - 1));
console.log(myArray);

console.log("deleted item (index 3): ", myArray.delete(3)); // 7

console.log(myArray);
