// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array0 = [234, 234, 566, 6546, 555];
// console.log(array0);
//
// let array1 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// console.log(array1);
//
// let arrayMix = [234, 234, 566, 6546, 555, 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', true, false, false, true, true];
// console.log(arrayMix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let array0 = [];
//
// array0[0] = true;
// array0[1] = false;
// array0[2] = 'true';
// array0[3] = 'loren';
// array0[5] = null;
// array0[4] = NaN;
// array0[6] = 3.14;
// array0[7] = undefined;
//
// console.log(array0);
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

// let array0 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
//
// while (i < array0.length){
//     console.log(array0[i]);
//     i++
// }


//     2. перебрати його циклом for

// for (const number of array0) {
//     console.log(number);
// }
//
// for (let j = 0; j < array0.length; j++) {
//     console.log(array0[j]);
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 1;
//
// while (i < array0.length){
//     console.log(array0[i]);
//     i+=2;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 1; i < array0.length; i += 2) {
//     console.log(array0[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
//
// while (i < array0.length) {
//     if (array0[i] % 2 === 0) {
//         console.log(array0[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (const number of array0) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < array0.length; i++) {
//     if (array0[i] % 3 === 0) {
//         array0[i] = 'okten'
//     }
// }
// console.log(array0);

// 8. вивести масив в зворотньому порядку.

// for (let i = array0.length - 1; i >= 0; i--) {
//     console.log(array0[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1
// let i = array0.length - 1;
//
// while (i > -1 ){
//     console.log(array0[i]);
//     i--
// }

//2
// for (let i = array0.length - 1; i >= 0; i--) {
//     console.log(array0[i]);
// }

// // 3
// let i = array0.length - 1;
//
// while (i > -1) {
//     if (i % 2) {
//         console.log(array0[i]);
//     }
//     i--
// }

// 4
// for (let i = array0.length - 1; i >= 0; i--) {
//     if (i % 2) {
//         console.log(array0[i]);
//     }
// }

// 5
// let i = array0.length - 1;
//
// while (i > -1) {
//     if (array0[i] % 2 === 0) {
//         console.log(array0[i]);
//     }
//     i--
// }

// 6
// for (let i = array0.length - 1; i >= 0; i--) {
//     if (array0[i] % 2 === 0) {
//         console.log(array0[i]);
//     }
// }

// 7
// for (let i = array0.length - 1; i >= 0; i--) {
//     if (array0[i] % 3) {
//         array0[i] = 'okten';
//     }
// }
// console.log(array0);


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [23, 43, 54, 567, 987, 234, 877, 456, 7890, 456];
//
// for (let number of array) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array =['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Dolorem', 'iste']
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = ['ipsum',  877, 'dolor', 54, true, 567, 987, 'consectetur', false, 'adipisicing',];
//
// for (let element of array) {
//     console.log(element);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = ['ipsum',  877, 'dolor', 54, true, 567, 987, 'consectetur', false, 'adipisicing',];

// for (let arrayElement of array) {
//     if(typeof arrayElement === 'boolean'){
//         console.log(arrayElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = ['ipsum',  877, 'dolor', 54, true, 567, 987, 'consectetur', false, 'adipisicing',];
//
// for (let arrayElement of array) {
//     if(typeof arrayElement === 'number'){
//         console.log(arrayElement);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = ['ipsum',  877, 'dolor', 54, true, 567, 987, 'consectetur', false, 'adipisicing',];
// for (let arrayElement of array) {
//     if(typeof arrayElement === 'string'){
//         console.log(arrayElement);
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array0 = [];
//
// array0[0] = true;
// array0[1] = false;
// array0[2] = 'true';
// array0[3] = 'loren';
// array0[5] = null;
// array0[4] = NaN;
// array0[6] = 3.14;
// array0[7] = undefined;
// array0[8] = true;
// array0[9] = 'undefined';
//
// for (const array0Element of array0) {
//     console.log(array0Element);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(` ${i}`);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i += 2) {
//     console.log(i);
//     document.write(` ${i}`);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(` ${i}`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(i);
//         document.write(` ${i}`);
//     }
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// let books = [
//     {
//         title: 'The color of magic',
//         pageCount: 340,
//         genre: ['Fantasy'],
//         authors: [
//             {name: 'Terry Pratchett', age: 68},
//             {name: 'Terry Pratchett', age: 68},
//             {name: 'Terry Pratchett', age: 68}]
//     },
//     {
//         title: 'The Lord of the rings',
//         pageCount: 1178,
//         genre: ['Fantasy'],
//         authors: [{name: 'J. R. R. Tolkien', age: 81}, {name: 'J. R. R. Tolkien', age: 81}]
//     },
//     {
//         title: 'Steel rat',
//         pageCount: 208,
//         genre: ['Fantastic', 'adventures'],
//         authors: [{name: 'Harry Harrison', age: 87}]
//     }
// ]


// -знайти наібльшу книжку.
// let biggest = books[0]
// for (let i = 0; i < books.length; i++) {
//     if (biggest.pageCount < books[i].pageCount) {
//         biggest = books[i]
//     }
// }
// console.log(biggest);

// - знайти книжку/ки з найбільшою кількістю жанрів

// let mostGenres = books[0]
// for (let i = 0; i < books.length; i++) {
//     if (mostGenres.genre.length < books[i].genre.length) {
//         mostGenres = books[i]
//     }
// }
// console.log(mostGenres);

// - знайти книжку/ки з найдовшою назвою

// let longestName = books[0]
// for (let i = 0; i < books.length; i++) {
//     if (longestName.title.length < books[i].title.length) {
//         longestName = books[i]
//     }
// }
// console.log(longestName);


// - знайти книжку/ки які писали 2 автори

// let authorsNumber= books[0]
// for (let i = 0; i < books.length; i++) {
//     if (books[i].authors.length  === 2) {
//         authorsNumber = books[i]
//     }
// }
// console.log(authorsNumber);


// - знайти книжку/ки які писав 1 автор

// let authorsNumber= books[0]
// for (let i = 0; i < books.length; i++) {
//     if (books[i].authors.length  === 1) {
//         authorsNumber = books[i]
//     }
// }
// console.log(authorsNumber);