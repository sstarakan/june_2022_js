// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userList = [];
for (let i = 0; i < 10; i++) {
    userList.push(new User(i + Math.floor(Math.random() * (990 - 100)), `name${i}`, `surname${i}`, `email${i}@mail.com`, `38055334668${i}`));
}

console.log(userList);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenIdUserList = userList.filter(value => !(value.id % 2))

console.log(evenIdUserList);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(userList.sort((value0, value1) => value0.id - value1.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
    User.apply(this, arguments);
    this.order = order;
}

let clientList = []

for (let i = 0; i < 10; i++) {
    let order = [];
    let id = i + Math.floor(Math.random() * (990 + 100))
    if (id % 2 === 0) {
        for (let j = 0; j < 3; j++) {
            order.push(`goods${j}`)
        }
    } else if (id % 3 === 0) {
        for (let j = 0; j < 2; j++) {
            order.push(`goods${j}`)
        }
    } else {
        order.push(`goods`)
    }
    clientList.push(new Client(id, `name${i}`, `surname${i}`, `email${i}@mail.com`, `38055334668${i}`, order));
}

console.log(clientList);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clientList.sort((value0, value1) => value0.order.length - value1.order.length)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, productionYear, maxSpeed, engineVolume) {
    this.model = model;
    this.productionYear = productionYear;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} -- ${this[key]}`);
            }
        }
        console.log('---------------------')
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.productionYear = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car = new Car('911', 2000, 345, 3.5);
car.info();
car.increaseMaxSpeed(30);
car.info();
car.changeYear(2019)
car.info();
car.addDriver('danilo');
car.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car0 {

    constructor(model, productionYear, maxSpeed, engineVolume) {
        this.model = model;
        this.productionYear = productionYear;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} -- ${this[key]}`);
            }
        }
        console.log('---------------------');
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.productionYear = newValue;
    }

    addDriver(driver) {
        this.driver = driver
    }
}

let car0 = new Car0('Panamera', 2014, 295, 4.0)

car0.info();
car0.increaseMaxSpeed(30);
car0.info();
car0.changeYear(2019)
car0.info();
car0.addDriver('danilo');
car0.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

function Prince(name, age, sizeOfFoundShoe) {
    this.name = name;
    this.age = age;
    this.sizeOfFoundShoe = sizeOfFoundShoe;
}

let listOfCinderellas = []

listOfCinderellas.push(new Cinderella('Cinderella0', 57, 55));
listOfCinderellas.push(new Cinderella('Cinderella1', 19, 35));
listOfCinderellas.push(new Cinderella('Cinderella2', 22, 38));
listOfCinderellas.push(new Cinderella('Cinderella3', 25, 30));
listOfCinderellas.push(new Cinderella('CinderellaTrue', 19, 34));
listOfCinderellas.push(new Cinderella('Cinderella4', 18, 36));
listOfCinderellas.push(new Cinderella('Cinderella5', 23, 39));
listOfCinderellas.push(new Cinderella('Cinderella6', 29, 40));
listOfCinderellas.push(new Cinderella('Cinderella7', 16, 32));
listOfCinderellas.push(new Cinderella('Cinderella8', 32, 42));

console.log(listOfCinderellas);

let prince = new Prince('PrinceName', 22 , 34);

for (const cinderella of listOfCinderellas) {
    if(cinderella.footSize === prince.sizeOfFoundShoe){
        console.log(cinderella);
    }
}

console.log(listOfCinderellas.find(value => value.footSize === prince.sizeOfFoundShoe));
