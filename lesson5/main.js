// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let rectangleS = (a, b) => a * b;
// console.log(rectangleS(5, 5));
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function circleS(radius) {
//     return Math.PI * radius ** 2;
// }
//
// console.log(circleS(5));
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let cylinderS = (radius, height) => 2 * Math.PI * radius * height;
//
// console.log(cylinderS(5, 5));
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array0 = [100, true, '50', false, 120, '345', 188];
//
// let arrayWriter = (array) => {
//     for (let element of array) {
//         console.log(element);
//     }
// }
//
// arrayWriter(array0);
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let createP = (text) => {
//     document.write(`<p>${text}</p>`);
// }
//
// let word = 'some text';
// createP(word)
//
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let createList = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// createList(word)
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let createRangedList = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createRangedList(word, 5)
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let createListForArrayItems = (array) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createListForArrayItems(array0)
//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let createObjectBlocks = (arrayOfObjects) => {
//     document.write(`<div>`);
//     for (const object of arrayOfObjects) {
//         for (const key in object) {
//             document.write(`<p>${key} -- ${object[key]}</p>`)
//         }
//     }
//     document.write(`</div>`);
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// createObjectBlocks(users)
//
//
// // - створити функцію яка повертає найменьше число з масиву
//
// let getMinNumberOfArray = (array) => {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (min > array[i]) {
//             min = array[i]
//         }
//     }
//     return min;
// }
//
// let array1 = [100, 78, 345, 2, -25, 5, 324, 6, 3, 6, -5]
//
// console.log(getMinNumberOfArray(array1));
//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let sumNumberOfArray = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement
//     }
//     return sum;
// }
//
// console.log(sumNumberOfArray(array1));