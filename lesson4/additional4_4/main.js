// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let array = [];
// let i = 0;
//
// do {
//     let randomNumber = Math.floor(Math.random()*(1000))
//     if(randomNumber%2===0){
//         array[i] = randomNumber
//         i++
//     }
// }while (array.length < 50)
//
// console.log(array);


//     b. заповнити його 50 непарними числами за допомоги циклу.

// let array = [];
//
// do {
//     let randomNumber = Math.floor(Math.random()*(1000))
//     if(randomNumber%2){
//         array.push(randomNumber)
//     }
// }while (array.length < 50)
//
// console.log(array);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let array = [];
//
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random()*(1000));
// }
//
// console.log(array);


//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let array = [];
//
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8));
// }
//
// console.log(array);


// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 3; i < array.length; i+=3) {
//     console.log(i, array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 3; i < array.length; i+=3) {
//     if (array[i]%2 === 0) {
//         console.log(i, array[i]);
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let newArray = [];
//
// for (let i = 3, j =0; i < array.length; i+=3) {
//     if (array[i]%2 === 0) {
//         console.log(i, array[i]);
//         newArray[j] = array[i];
//         j++;
//     }
// }
//
// console.log(newArray);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// for (let i = 0; i < array.length; i++) {
//     if (array[i + 1] % 2 === 0) {
//         console.log(array[i]);
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array0 = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < array0.length; i++) {
//     sum += array0[i];
// }
// let average = sum / array0.length
// console.log(average);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let newArray = [];
//
// for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i]*5;
// }
//
// console.log(newArray);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arrayMix = [true, 'sdf', 3, 5, false, NaN, 'dfsdf'];
// let newArray = [];
//
// for (let i = 0, j =0; i < arrayMix.length; i++) {
//     if (typeof arrayMix[i] === 'number') {
//         newArray[j] = arrayMix[i];
//         j++
//     }
// }
//
// console.log(newArray);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
//
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if(usersWithId[i].id === citiesWithId[j].user_id){
//             usersWithId[i].address = citiesWithId[j]
//         }
//     }
// }
//
// console.log(usersWithId);


//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array = [];
//
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.floor(Math.random()*(1000));
// }
//
// console.log(array);

// for (const arrayElement of array) {
//     if(arrayElement % 2 ===0){
//         console.log(arrayElement);
//     }
// }

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let newArray =[];
//
// for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i];
// }
//
// console.log(newArray);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let array = ['a', 'b', 'c']
// let word = '';

// for (let i = 0; i < array.length; i++) {
//     word += array[i];
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0;
//
// while (i < array.length){
//     word += array[i];
//     i++;
// }
//
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// for (const element of array) {
//     word += element;
// }
// console.log(word);