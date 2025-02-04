const strings = ["a", "b", "c", "d"];
//                0    1    2    3
//              ["x", "a", "b", "c", "d"]
//                0    1    2    3    4

// 4*4 = 16 bytes of storage

// Push
strings.push("e"); // O(1) or O(n) if the array is full and needs to be resized. -> Due to this is a dynamic array.

// Pop
strings.pop(); // O(1)
strings.pop(); // O(1)

// Unshift
strings.unshift("x"); // O(n)

// Arrays are'n the best choice for adding or removing elements at the beginning of the array.

// Splice
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);

// const strings = ["a", "b", "c", "d"]; // This automatic creates a dynamic array, due to the way that JavaScript works.
