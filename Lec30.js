let a = 4;
let b = 2;
console.log(a + b, a - b, a * b, a / b);

//Swap
let temp = a;
console.log(a, b);
a = b;
b = temp;
console.log(a, b);

//3
let x = 76;
let y = 87;
let z = 98;

const totalMarks = x + y + z;
const avgMarks = totalMarks / 3;
const Percentage = (totalMarks / 300) * 100;
console.log(totalMarks, avgMarks, Percentage);

//4
let price = 499;
let quantity = 4;

const bill = price * quantity;
const discountAmt = bill * 0.1;
const finalAmt = bill - discountAmt
console.log(bill, discountAmt, finalAmt);

//5
let length = 45;
let breadth = 32;

const area = length * breadth;
const perimeter = 2 * (length + breadth);
console.log(area, perimeter);

//6
let num = 8;
if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

//7
let n = 0;
if (n > 0) {
    console.log("Positive");
}
else if (n < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

//8
let d = 5;
let e = 8;

if (d > e) {
    console.log(`${d} is greater`);
}
else if (e > d) {
    console.log(`is greater ${e}`);
}
else {
    console.log("Both are equal");
}

//9
let g = 6;
let h = 9;
let i = 2;

if (g > h) {
    if (h > i) {
        console.log(`${g} is largest of all three`);
    }
}
else {
    if (h > i) {
        console.log(`${h} is largest of all three`);
    }
}

//10
let age = 16;
if (age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}

//11
let aGe = 19;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
}
else {
    console.log("You can't drive");
}

//12
let Num = 8;
if (Num >= 10 && Num <= 100) {
    console.log("Number is between 10 and 100");
}
else {
    console.log("Number is not between 10 and 100");
}

//13
const percent = 67;
if (percent > 100 || percent < 0) {
    console.log("Invalid percentage");
}
else {
    if (percent >= 90 && percent <= 100) {
        console.log("A");
    }
    else if (percent >= 80 && percent <= 89) {
        console.log("B");
    }
    else if (percent >= 70 && percent <= 79) {
        console.log("C");
    }
    else if (percent >= 60 && percent <= 69) {
        console.log("D");
    }
    else if (percent >= 40 && percent <= 59) {
        console.log("E");
    }
    else {
        console.log("F");
    }
}

//14
let a1 = 43;
let a2 = 57;
let a3 = 97;

const ObtainedMarks = a1 + a2 + a3;
if (ObtainedMarks > 120) {
    const Avg = ObtainedMarks / 3;
    if (Avg >= 75) {
        console.log("Distinction");
    }
    else if (Avg >= 60) {
        console.log("Frist Division");
    }
    else if (Avg >= 50) {
        console.log("Second Division");
    }
    else {
        console.log("Pass");
    }
}
else {
    console.log("Fail");
}

//15
let noOfUnits = 250;
let Bill = 0;

if (noOfUnits > 200) {
    noOfUnits -= 200;
    Bill += noOfUnits * 10;
    Bill += 1200;
    console.log(Bill);
}
else if (noOfUnits > 100) {
    noOfUnits -= 100;
    Bill += noOfUnits * 7;
    Bill += 500;
    console.log(Bill);
}
else {
    console.log(noOfUnits * 5);
}


//16
const username = "admin";
const password = "12345";

if (username == "admin" && password === "12345") {
    console.log("Login successful");
}
else {
    console.log("Invalid username and password");
}

//17
let salary = 450000;
const exp = 3;
let bonus = 0;
let finalSal = 0;
if (exp >= 10) {
    bonus = salary * 0.2;
    finalSal = salary + bonus;
    console.log(salary, bonus, finalSal);
}
else if (exp >= 5) {
    bonus = salary * 0.1;
    finalSal = salary + bonus;
    console.log(salary, bonus, finalSal);
}
else if (exp >= 2) {
    bonus = salary * 0.05;
    finalSal = salary + bonus;
    console.log(salary, bonus, finalSal);
}
else {
    console.log("No Bonus beti");
}

//18
let AGE = 14;
if (AGE < 0) console.log("Invalid age beti! Please enter valid age");
else {
    if (AGE >= 0 && AGE <= 12) console.log("Child");
    else if (AGE >= 13 && AGE <= 19) console.log("Teenager");
    else if (AGE >= 20 && AGE <= 59) console.log("Adult");
    else console.log("Senior Citizen");
}

//19
let no = '4';

switch(no){
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday"); 
        break;
    case '3':
        console.log("Wednesday"); 
        break;
    case '4':
        console.log("Thursday"); 
        break;
    case '5':
        console.log("Friday"); 
        break;
    case '6':
        console.log("Saturday"); 
        break;
    case '7':
        console.log("Sunday"); 
        break;
    default:
        console.log("Invalid day!");
        break;
}

//20
// let n1 = 5;
// let n2 = 8;
// const operator = '+';

// switch(operator){
//     case '+':
//         console.log(n1+n2);
//         break;
//     case '-':
//         console.log(n1-n2);
//         break;
//     case '*':
//         console.log(n1*n2);
//         break;
//     case '/':
//         console.log(n1/n2);
//         break;
//     case '%':
//         console.log(n1%n2);
//         break;
//     default:
//         console.log("Invalid operator!");
//         break;
// }

//21
let NuM = '4';

switch(NuM){
    case '1':
        console.log("January");
        break;
    case '2':
        console.log("Febrauary");
        break;
    case '3':
        console.log("March");
        break;
    case '4':
        console.log("April");
        break;
    case '5':
        console.log("May");
        break;
    case '6':
        console.log("June");
        break;
    case '7':
        console.log("July");
        break;
    case '8':
        console.log("August");
        break;
    case '9':
        console.log("September");
        break;
    case '10':
        console.log("October");
        break;
    case '11':
        console.log("November");
        break;
    case '12':
        console.log("December");
        break;
    default:
        console.log("Invalid month");
        break;
}

//22
let n1 = 5;
let n2 = 8;
const operator = "Multiplication";

switch(operator){
    case "Addition":
        console.log(n1+n2);
        break;
    case "Subtraction":
        console.log(n1-n2);
        break;
    case "Multiplication":
        console.log(n1*n2);
        break;
    case "Division":
        console.log(n1/n2);
        break;
    case "Modulus":
        console.log(n1%n2);
        break;
    default:
        console.log("Invalid operator!");
        break;
}

//23
const signal = "yellow";
switch(signal){
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
        break;
}

//24
let balance = 80000;
let withdrawl = 30000;

if(withdrawl>0 && withdrawl<=balance){
    console.log(`Balance: $${balance}`);
    console.log(`Withdrawl: $${withdrawl}`);
    console.log();
    balance-=withdrawl;
    console.log("Withdrawl successful!");
    console.log(`Remaining Balance: ${balance}`);
}

//25
let agee = 25;
let noOfTickets = 3;
let total = 0;

if(agee<12) total = 100*noOfTickets;
else if(agee>=12 && agee<=59) total = 200*noOfTickets;
else total = 120*noOfTickets;

console.log(`Age: ${agee}`);
console.log(`Tickets: ${noOfTickets}`);
console.log();
console.log(`Total: ${total}`);

//26
let choice = '3';
let qunatityy = 2;
let BILL;

switch(choice){
    case '1':
        BILL = 150*quantity;
        break;
    case '2':
        BILL = 250*quantity;
        break;
    case '3':
        BILL = 180*quantity;
        break;
    case '4':
        BILL = 120*quantity;
        break;
    default:
        console.log("Invalid choice!");
        break;
}
console.log(`Choice: ${choice}`);
console.log(`Quantity: ${qunatityy}`);
console.log();
console.log(`Total: ${BILL}`);


//27
let NoOfUnits = 550;
let use = NoOfUnits;
let BIll = 0;

if (NoOfUnits > 200) {
    NoOfUnits -= 200;
    BIll += NoOfUnits * 10;
    BIll += 1200;
    console.log(BIll);
}
else if (NoOfUnits > 100) {
    NoOfUnits -= 100;
    BIll += NoOfUnits * 7;
    BIll += 500;
    console.log(Bill);
}
else {
    console.log(NoOfUnits * 5);
}

if(BIll >=2000){
    let discount = BIll*0.1;
    console.log(`Units: ${use}`);
    console.log(`Original Bill: ${BIll}`);
    console.log(`Discount: ${discount}`)
    let final = BIll-discount;
    console.log(`Final Bill: ${final}`);
}
else{
    console.log(`Units: ${use}`);
    console.log(`Bill: ${BIll}`);
}

//28
let baalance = 4940;
let withddrawl = 594;
let deposit = 3000;

let choose = '2';

switch(choose){
    case '1':
        console.log(baalance);
        break;
    case '2':
        baalance+=deposit;
        console.log(baalance);
        break;
    case '3':
        if(withddrawl<=baalance) balance-=withddrawl;
        console.log(baalance);
        break;
    case '4':
        console.log("Thanks for Using");
        break;
    default:
        console.log("Error!");
}

//