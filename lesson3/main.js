// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Enter a number:');
// console.log((a ? 'Correctly' : 'Wrong'));


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt("Ведіть поточну хвилину години:");
//
// if(time < 15 && time >= 0){
//     console.log('Перша чверть');
// } else if(time < 30 && time >= 0){
//     console.log('Друга чверть');
// } else if(time < 45 && time >= 0){
//     console.log('Третя чверть');
// }else if(time < 60 && time >= 0){
//     console.log('Четверта чверть');
// }else {
//     console.log('Введіть число від 0 до 59');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt("Ведіть поточну хвилину години:");
//
// if(day < 11 && day >= 0){
//     console.log('Перша декада');
// } else if( day < 21 && day >= 0){
//     console.log('Друга декада');
// } else if(day <= 31 && day >= 0){
//     console.log('Третя декада');
// }else {
//     console.log('Введіть число від 0 до 31');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('Enter number day of the week:')
//
// switch (day) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('Enter number day of the week')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number0 = +prompt('Enter first number:');
// let number1 = +prompt('Enter second number:');
//
// if(number0 > number1){
//     console.log(number0);
// }else if(number1 > number0){
//     console.log(number1);
// }else if(number1 === number0){
//     console.log('еhe numbers are equal');
// }else{
//     console.log('enter two numbers');
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = NaN;

if(false || !x){
    x = 'default'
}

console.log(x);
