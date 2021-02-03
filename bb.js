// Falsy:
// false
// 0
// ""
// undefined
// null
// NaN
// Truthy:
// "0", " ", [], {}

// const name = 12;
// if(name){
//     console.log('condition is true');
// }
// else{
//     console.log('condition is false');
// }

// undefine vs null
// let pakhi;
// console.log(pakhi); 

// function add(num1, num2){
//     console.log(num1, num2);
// }
// const result = add(13);
// console.log(result);

// map

const numbers = [2, 4, 5];
// const output = []
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square (element){
//     return element * element;
// }
// const square = element => element * element;
// const square = x => x * x;
// const result = numbers.map(function(element){
//     return element * element;
// })
// const result = numbers.map(x => x * x);
// console.log(result);
// const bigger = numbers.filter(x => x > 2);
// console.log(bigger);
// const isThere = numbers.find(x => x > 2);
// console.log(isThere);

const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 42, name: 'Mannaaa'},
    {id: 71, name: 'Moyuri'},
    {id: 27, name: 'Deepjol'}
];
// const output = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const name = element.name;
//     output.push(name);
// }
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.find(s => s.id > 43);
console.log(bigger);