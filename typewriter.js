const sentence = "hello there from lighthouse labs";


// alternate loop-style for those that prefer a little more control:

// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(`${sentence[i]}`);
// }, i * 150) -//per itteration value of x will increment by 150ms 
// }


// using for..of loop style given by assignment:

const printer = () => {
  // x will store the value used to decide amount of ms for the setTimeout function 
  let x = 1000
  for (const char of sentence) {
    // per itteration value of x will increment by 150ms 
    x = x + 150
    setTimeout(() => {
      process.stdout.write(`${char}`);
    }, x)
  }
};

setTimeout(() => {
  console.log(`\n`);
}, 6000)

printer()