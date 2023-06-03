// task 1

let numbers = [4, 16, 19, 22, 11, 144, 967, 19124]

let even = []
let odd = []

let filter = numbers.filter(numbers => {
    if(numbers % 2 === 0){
        even.push(numbers)
    }
})


// task 2

let longWords = ['jafar', 'dilik', 'emin', 'aziz']
let longest = 0;
for (let i = 0; i < longWords.length; i++) {
if (longest < longWords[i].length) {
    longest = longWords[i];
  }
}
console.log(longest)

// способ 2

// let arr = ['jafar', 'dilik', 'emin', 'aziz'];
// let lengths =  arr.map(function(word) {
//   return word + ' = ' + word.length;
// });
// console.log(lengths + ' jafar and dilik' + ' самые длинные');
