// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let word0 = 'hello';
// let word1 = 'owu';
// let word2 = 'com';
// let word3 = 'ua';
// let numb0 = 1;
// let numb1 = 10;
// let numb2 = -999;
// let numb3 = 123;
// let pi = 3.14;
// let e = 2.7;
// let numb4 = 16;
// let boolean0 = true;
// let boolean1 = false;
//
// console.log(`${word0} ${word1}.${word2}.${word3}`);
// alert(`${word0} ${word1}.${word2}.${word3}`);
// document.write(`${word0} ${word1}.${word2}.${word3}`);
//
// console.log(`numb 1 = ${numb0}`);
// console.log(`numb 2 = ${numb1}`);
// console.log(`numb 3 = ${numb2}`);
// console.log(`numb 4 = ${numb3}`);
// console.log(`numb 5 = ${numb4}`);
// console.log(`Pi = ${pi}`);
// console.log(`euler number = ${e}`);
//
// alert(`numb 1 = ${numb0}`);
// alert(`numb 2 = ${numb1}`);
// alert(`numb 3 = ${numb2}`);
// alert(`numb 4 = ${numb3}`);
// alert(`numb 5 = ${numb4}`);
// alert(`Pi = ${pi}`);
// alert(`euler number = ${e}`);
//
// document.write(`numb 1 = ${numb0}`);
// document.write(`numb 2 = ${numb1}`);
// document.write(`numb 3 = ${numb2}`);
// document.write(`numb 4 = ${numb3}`);
// document.write(`numb 5 = ${numb4}`);
// document.write(`Pi = ${pi}`);
// document.write(`euler number = ${e}`);
//
// console.log(`Boolean1 = ${boolean0}`);
// console.log(`Boolean1 = ${boolean1}`);
//
// alert(`Boolean1 = ${boolean0}`);
// alert(`Boolean1 = ${boolean1}`);
//
// document.write(`Boolean1 = ${boolean0}`);
// document.write(`Boolean1 = ${boolean1}`);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

// let firstName = 'Danilo';
// let midlName =  'Volodymyrovich';
// let lastName = 'Lototskyy';
//
// let fullName = `${firstName} ${midlName} ${lastName}`;
//
// console.log(fullName);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
//
// console.log((typeof a));
// console.log((typeof b));
// console.log((typeof c));


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     та вивести в консоль

let firstName = prompt();
let midlName =  prompt();
let lastName = prompt();

let fullName = `${firstName} ${midlName} ${lastName}`;

console.log(fullName);