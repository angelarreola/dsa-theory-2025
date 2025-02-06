// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

// function reverse(str) {
//   rev = str.split("");
//   const isEven = rev.length % 2 == 0;
//   const middleLetterIndex = isEven
//     ? Math.floor(rev.length / 2)
//     : Math.floor(rev.length / 2) + 1;

//   for (let i = 0, j = rev.length - 1; i < middleLetterIndex; i++, j--) {
//     let aux = rev[i];
//     rev[i] = rev[j];
//     rev[j] = aux;
//   }
//   return rev.join("");
// }

function reverse(str) {
  rev = str.split("");
  const middleLetterIndex =
    rev.length % 2 == 0
      ? Math.floor(rev.length / 2)
      : Math.floor(rev.length / 2) + 1;

  for (let i = 0, j = rev.length - 1; i < middleLetterIndex; i++, j--) {
    let aux = rev[i];
    rev[i] = rev[j];
    rev[j] = aux;
  }
  return rev.join("");
}

let exampleString = "Hello!";
console.log("Original string:", exampleString);

r = reverse(exampleString);
console.log("Result string:", r);
