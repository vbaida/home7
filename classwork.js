/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
     рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
     drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function car(model, product, year, maxspeed, enginecap) {
    this.model = model;
    this.product = product;
    this.year = year;
    this.maxspeed = maxspeed;
    this.enginecap = enginecap;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDrive = function (driver){
        this.drive = driver
    }
}

let cararr = new car('Mercedes', 'Mercedes', 2021, 280, 3.0)
console.log(cararr);
cararr.drive();
cararr.increaseMaxSpeed(40);
cararr.changeYear(2019);
cararr.addDrive('vitaliy');
console.log(cararr)


/* - (Те саме, тільки через клас)
 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class Car {
    constructor(model, product, year, maxspeed, enginecap) {

        this.model = model;
        this.product = product;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginecap = enginecap;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxspeed = this.maxspeed + newSpeed
        }
        this.changeYear = function (newValue) {
            this.year = newValue
        }
        this.addDrive = function (driver) {
            this.drive = driver
        }
    }
}

let cararry = new Car('Volvo', 'Volvo', 2020, 250, 2.0)
console.log(cararry);
cararry.drive();
cararry.increaseMaxSpeed(40);
cararry.changeYear(2019);
cararry.addDrive('vitaliy');
console.log(cararry)

/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
class Redcap {
    constructor(username, old, foot_size) {
        this.username = username;
        this.old = old;
        this.foot_size = foot_size;
    }
}
let redcaparr = [
    new Redcap ('Olena', 18, 37),
    new Redcap ('Ira', 15, 36),
    new Redcap ('Mariya', 16, 35),
    new Redcap ('Andriana', 17, 38),
    new Redcap ('Марія', 19, 39),
    new Redcap ('Катерина', 20, 34),
    new Redcap ('Таня', 21, 33),
    new Redcap ('Оксана', 23, 34),
    new Redcap ('Марина', 22, 37),
    new Redcap ('Ксеня', 21, 38),]
console.log(redcaparr)

class Prince  {
    constructor(princename, old, shoe) {
        this.princename = princename;
        this.old = old;
        this.shoe = shoe;
    }
}
let princearr = new Prince ('Vasia', 25, 33)

let famile = (redcaparr, princearr)=> {
    for (let item of redcaparr) {
        if (item.foot_size === princearr.shoe)
            return `Твоя попелюшка ${item.username}`
    }
}
console.log(famile(redcaparr,princearr))

let famile2 = redcaparr.find ((item)=>item.foot_size === princearr.shoe);
console.log(famile2)