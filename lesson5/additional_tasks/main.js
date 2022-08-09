// //
// // Всі функції повинні бути описані стрілочним типом!!!!
// //     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let getMinNumb = (a, b, c) => {
//     if (a < b && a < c) {
//         return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else {
//         return c;
//     }
// }
//
// console.log(getMinNumb(4, 2, 10));
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let getMaxNumb = (a, b, c) => {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }
//
// console.log(getMaxNumb(4, 2, 10));
//
// // - створити функцію яка повертає найбільше число з масиву
//
// let array0 = [100, 78, 345, 2, -25, 5, 324, 6, 3, 6, -5]
//
// let getMaxNumberOfArray = (array) => {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i]
//         }
//     }
//     return max;
// }
//
// console.log(getMaxNumberOfArray(array0));
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
// console.log(getMinNumberOfArray(array0));
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
// console.log(sumNumberOfArray(array0));
//
// //
// // - Дано натуральное число n. Выведите все числа от 1 до n.
//
// let writeNumbersToLimit = (limit) => {
//     for (let i = 0; i < limit; i++) {
//         console.log(i);
//     }
// }
//
// writeNumbersToLimit(15);
//
//
// // - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
// let writeNumbersBetweenLimits = (a, b) => {
//     if (a > b) {
//         for (let i = b; i < a; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = b; i > a; i--) {
//             console.log(i);
//         }
//     }
// }
//
//
// // -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// //   EXAMPLE:
// //   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// //   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// //   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let changeElementsOfArray = (array, index) => {
//     let temp = array[index + 1];
//     array[index + 1] = array[index];
//     array[index] = temp;
// }
//
// let array1 = [9, 8, 0, 4];
// console.log(array1);
// changeElementsOfArray(array1, 0);
// console.log(array1);
// changeElementsOfArray(array1, 1);
// console.log(array1);
// changeElementsOfArray(array1, 2);
// console.log(array1);
//
// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // EXAMPLE:
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// //  [0,0,1,0]   => [1,0,0,0]
//
//
let allZeroOfArrayToEnd = (array) => {
    let temp = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length  - 1 - i; j++) {
            if (array[j] === 0) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp
            }
        }
    }
}

let array2 = [3,4,0, 0, 0, 0, 0, 1, 3, 4,0,0,3,34,3,0];

allZeroOfArrayToEnd(array2)

console.log(array2);

