// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let array0 = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// array0.forEach((value, index) => console.log(`phrase${index + 1} ${value.length}`));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// array0.forEach(value => console.log(value.toUpperCase()))


// - Перевести до нижнього регістру настипні стрінгові значення
// let array1 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
//
// array1.forEach(value => console.log(value.toLowerCase()))


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
//
// str = str.trim()
// console.log(str);

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.

// let str = 'Ревуть воли як ясла повні';
//
// let stringToArray = (string) => string.split(' ')
//
// let arr = stringToArray(str);
//
// console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arrayOfNubs = [10,8,-7,55,987,-1011,0,1050,0];
//
// let arrayOfStr =  arrayOfNubs.map(value => value.toString())
//
// console.log(arrayOfStr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

let sortNums = (arrayOfNumbers, sortType) => {
    if (sortType === 'ascending') {
        return arrayOfNumbers.sort((numb1, numb2) => numb1 - numb2);
    }
    if(sortType === 'descending'){
        return arrayOfNumbers.sort((numb1, numb2) => numb2 - numb1);
    }
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration));
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let createDeck = (deckOfCards) =>{
    let cardSuit = ['spade', 'diamond','heart', 'clubs'];
    let value = ['6', '7', '8', '9', '10', 'ace','jack','queen','king','joker'];

    for (let i = 0; i < cardSuit.length ; i++) {
        for (let j = 0; j < value.length ; j++) {
            if(cardSuit[i] === 'diamond' || cardSuit[i] === 'heart' ) {
                deckOfCards.push({cardSuit: cardSuit[i], value: value[j], color: 'red'});
            }else {
                deckOfCards.push({cardSuit: cardSuit[i], value: value[j], color: 'black'});
            }
        }
    }
}

let deckOfCards = [];
createDeck(deckOfCards)
console.log(deckOfCards);

console.log(deckOfCards.find(value => value.value === 'ace' && value.cardSuit === 'spade'));
console.log(deckOfCards.filter(card => card.value === '6'));
console.log(deckOfCards.filter(card => card.color === 'red'));
console.log(deckOfCards.filter(card => card.cardSuit === 'diamond'));
console.log(deckOfCards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8'));





// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


console.log(deckOfCards.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));