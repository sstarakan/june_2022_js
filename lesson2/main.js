// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let array = [2 , 45 , 435 , 'dddd', true, {name: 'den', age: 28}, 7 , false , true, 3.14];
//
// for (let arrayElement of array) {
//     console.log(arrayElement);
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book0 = {
//     title: 'The color of magic',
//     pageCount: 340,
//     genre: 'Fantasy'
// }
//
// let book1 = {
//     title: 'The Lord of the rings',
//     pageCount: 1178,
//     genre: 'Fantasy'
// }
//
// let book2 = {
//     title: 'Steel rat',
//     pageCount: 208,
//     genre: 'Fantastic'
// }


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age


let book0 = {
    title: 'The color of magic',
    pageCount: 340,
    genre: 'Fantasy',
    authors:[{name: 'Terry Pratchett', age: 68}, {name: 'Terry Pratchett', age: 68}]
}

let book1 = {
    title: 'The Lord of the rings',
    pageCount: 1178,
    genre: 'Fantasy',
    authors:[{name: 'J. R. R. Tolkien', age: 81}, {name: 'J. R. R. Tolkien', age: 81}]
}

let book2 = {
    title: 'Steel rat',
    pageCount: 208,
    genre: 'Fantastic',
    authors:[{name: 'Harry Harrison', age: 87}, {name: 'Harry Harrison', age: 87} ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [

    {
        name: 'david',
        username: 'uberdavid3000',
        password: 'strongPassword0'
    },
    {
        name: 'vania',
        username: 'ninjaVania',
        password: 'strongPassword1'
    },
    {
        name: 'ksenia',
        username: 'sniganna3+',
        password: 'strongPassword2'
    },
    {
        name: 'Olia',
        username: 'babby2002',
        password: 'strongPassword3'
    },
    {
        name: 'max',
        username: 'shedo777',
        password: 'strongPassword4'
    },
    {
        name: 'Liam',
        username: 'nelson',
        password: 'strongPassword5'
    },
    {
        name: 'david',
        username: 'clipped',
        password: 'strongPassword6'
    },
    {
        name: 'oleh',
        username: 'rondodon',
        password: 'strongPassword7'
    },
    {
        name: 'den',
        username: 'don',
        password: 'strongPassword8'
    },
    {
        name: 'Ann',
        username: 'flowerFromAss',
        password: 'strongPassword9'
    },
]

for (let user of users) {
    console.log(user.password);
}