//--------------
//Подключение  js -  в html
//Переменные
//  console.log(a);  //Uncaught ReferenceError: can't access lexical declaration 'a' before initialization
//let a = 110;
//console.log(a);  //10
//a = 20;
//console.log(a);   //20

// Почему остается ошибка у меня в браузере
// Uncaught SyntaxError: redeclaration of let a
//потому что 2 строки в html  с вызовом этого скрипта было
//ок

//----------------
//const b=15;
//console.log(b);  //10

//Типы данных-----------
//
//Boolean;
//let name = true;
//let age = false;

//
//Symbol;

//спец типы данных---------
//undefined;  //не присводилизначение
//null;   // присводили пустое значение

// let a = null;
// console.log(a);     //null
// let b;
// console.log(b);     //undefined


//
// typeof
// console.log(typeof 3);  //number
// console.log(typeof "adf");  //string
// console.log(typeof true);   //boolean


//-----------------------------
//число

// console.log(1 + 2);     //3

// Number - приведение к числу    -
// const value = "3";      //3
// console.log(typeof value);   //string
// console.log(Number(value));     //3
// console.log(typeof Number(value));  //number

//----------------
//isNaN(v)
//проверка на число  - оператор isNaN(v)
// let a = 31;
// console.log(a);

// const number=Number("51");
// console.log(Number.isNaN(number));  //flase

// const string = Number("ljhkjhkjh");
// console.log(Number.isNaN(string));  //true

//--------------------------

//Number.parseInt()   и Number.parseFloat()
//parsInt  - парсит целые числа
// console.log(Number.parseInt("5ddd"));  //5
// console.log(Number.parseInt("12fg994"));  //12
// console.log(Number.parseInt("11.6fdxgfdx79"));  //11
// console.log(Number.parseInt("dfgsdfg"));  //NaN


//parseFloat  парсит дробные счисла, с точкой
// console.log(Number.parseFloat("5ddd"));  //5
// console.log(Number.parseFloat("12fg994"));  //12
// console.log(Number.parseFloat("11.6fdxgfdx79"));  //11.6
// console.log(Number.parseFloat("dfgsdfg"));  //NaN

//суммирование  с точкой
// console.log(0.1 + 0.2 === 0.3);  // false

// console.log(0.1 + 0.2);  // 0.30000000000000004

// console.log((0.1*10 + 0.2*10)/10);  //0.3

// 09:45мин

//--------------------------------
// ОБъект Math

// math.floor(n)  -возвращает  целое число, меньшее или равно указанному n
// console.log(Math.floor(1.7));   //1

// math.cell(n)  -возвращает  целое число, большее или равно указанному n!!!!!!!!!!!!!???????????
// console.log(Math.cell(1.7));   //2
// console.log(Math.cell(1.2));   //2

//почему у меня ругается на эти команды cell????????????


// Math.round(n) - округление  к ближайшему целому
// console.log(Math.round(1.7));   //2
// console.log(Math.round(1.2));   //1


//Math.max(n1,n2...) - максимальное из чисел
// console.log(Math.max(10, 20, 30, 50, 40));   //50


//Math.min(n1,n2...) - min из чисел
//  console.log(Math.min(10, 20, 30, 50, 40));   //10


// Math.pow(base, exponent) - возводит в степень
// console.log(Math.pow(2, 4));   //16

// Math.random() - случйное число между 0 и 1
// console.log(Math.random());   //  случайное от 0 до1   0.501941398717463
// console.log(Math.random()*(10-1)+1);   //случайное от 1 до 10  2.228105508023873
 
// 11:27 мин

//-------------------------
//-------------------------
// Тип String

// let str = "привет";
// let str2 = 'Одинарные кавычки тоже можно';
// let phrase = `так можно вставлять ${str}`;  // вывернутые кавычки использ-ть когда надо вставить какое-то значение
// console.log(str + str2 + phrase);   //приветОдинарные кавычки тоже можнотак можно вставлять привет

//!!!!!!!????
//script.js:132 Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
//script.js:133 Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
//script.js:134 Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
//после добавления  console.log  перестало ругаться в firefox

// let name= "Оля";
// let hello = `Привет, ${name}`;
// console.log(hello);  //Привет, Оля

// const message = "JavaScript " + "is" + " awesome";
//  console.log(message);  //JavaScript is awesome


//--------------------------------
//--------------------------------
// Конкатенация
// let result;

// result = 5 + "5";
// console.log(result);        //55
// console.log(typeof result);  //string

// result = 5 + "5"+5;
// console.log(result);        //555
// console.log(typeof result); //string

// result = 5 +5+ "5";
// console.log(result);        //105
// console.log(typeof result); //string

// ПОэтому - при приеме данных от клиента проверять тип переменной.


//-------------------
// Методы строк

// const js = "JAvaScript";
// // length
// // toLowerCase()
// // toUpperCase()
// // indexOf()  - поиск символа в строке и найти его номер index
// // includes()

// const message = "Welcome to Bahamas!";
// console.log(message.length);    //19

// //без объявления переменной посчитать ее длину:
// console.log('There is nothing impossible to him who will try'.length);    //47

// console.log(message.toLowerCase()); //welcome to bahamas!
// console.log(message.toUpperCase()); //WELCOME TO BAHAMAS!
// //надо для валидации паролей

// //При этом исходная сттрока не изменится
// console.log(message); //Welcome to Bahamas!


// console.log(message.indexOf("t")); //8  но с нуля
// console.log(message.indexOf("hello")); //-1  нет в строке-источнике message искомой строки
// //счет начинается с 0 - у буквы W - Index =0

// //все методы строк чувствительны к регистру
// console.log(message.includes("welcome"));       //false
// console.log(message.includes("Welcome"));       //true

// 17:08мин
