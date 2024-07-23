
//Домашнє завдання.
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

let value = 0;
if (value > 0) { console.log(true); }
else  { console.log(false); }

let value2 = 0;
value2 > 0 ? console.log(true) : console.log(false);

let value4 = 1;
// let value4 = 0;
// let value4 = -3;


//так по 0 - пусто вiзуально, але в консоль виведено. пробiл
if (value4 > 0) { console.log(true); }
else if (value4 < 0) { console.log(false); }
else console.log(" ");

//так по 0 - немає вивода в консоль
if (value4 > 0) { console.log(true); }
else if (value4 < 0) { console.log(false); }

//так по 0 - "0"  в консоль
if (value4 > 0) { console.log(true); }
else if (value4 == 0) { console.log("0"); }
else  { console.log(false); }


let num = 0;
switch (num) {
    case 1: console.log(true); break;
    case 0: console.log(0); break;
    case -3: console.log(false); break;
}



// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

let val = "test";
if (val =="test") { console.log(true); }
else if (value4 < 0) { console.log(false); }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел