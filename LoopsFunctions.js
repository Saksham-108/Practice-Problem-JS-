//1
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//2
// for(let i=1; i<=20; i++){
//     if(i%2==0) console.log(i);
//     else continue;
// }

//3
// for(let i=1; i<=20; i++){
//     if(i%2!=0) console.log(i);
//     else continue;
// }

//4
// for(let i=10; i>=1; i--){
//     console.log(i);
// }

//5
// let sum = 0;
// for(let i=1; i<=10; i++){
//     sum+=i;
// }
// console.log(sum);

//6
// let num = 4;
// for(let i=1; i<=10; i++){
//     console.log(num*i);
// }

//7
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//8
// let i = 1; 
// let sum = 0;
// while(i<=20){
//     if(i%2==0) sum+=i;
//     i++;
// }
// console.log(sum);

//9
// let i = 1;
// while(i<=10){
//     if(i==6) break;
//     console.log(i);
//     i++;
// }

//10
// let i=1; 
// while(i<=10){
//     if(i==5){
//         i++;
//         continue;
//     }
//     else{
//         console.log(i);
//     }
//     i++;
// }

//11
// let name = "Saksham";
// function greetUser(name){
//     console.log(`Shri Harivansh ${name}`);
// }
// greetUser(name);

//12
// let a = 5;
// let b = 9;
// const sum = (a, b) => a+b;
// console.log(sum(a, b));

//13
// let n = 4;
// const check = (n) => {
//     if(n%2==0) console.log("Even");
//     else console.log("Odd");
// }
// check(n);

//14
// let num = 6;
// const square = (num) => num*num;
// console.log(square(num));

//15
// let n1 = 7; 
// let n2 = 4;
// const greatest = (n1, n2) =>{
//     if(n1>n2) console.log(`${n1} is greater`);
//     else console.log(`${n2} is greater`);
// }
// greatest(n1, n2);

//16
// let price = 300;
// let quantity = 4;
// function calculateTotal(p, q){
//     let total = price*quantity;
//     console.log(total);
// }
// calculateTotal(price, quantity)

//17
// let n = 5;
// const printNumbers = (n) => {
//     for(let i=1; i<=n; i++){
//         console.log(i);
//     }
// }
// printNumbers(n);

//18
// let n = 6;
// const printTable = (n) => {
//     for(let i=1; i<=10; i++){
//         console.log(n*i);
//     }
// }
// printTable(n);

//19
let n = 8;
const sumNumbers = (n) => {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    console.log(sum);
}
sumNumbers(n);