'use strict';

 //Задача 1
const ADMIN_PASSWORD = prompt('Введите пароль', 'm4ng0h4ckz') ;
let message;
console.log(ADMIN_PASSWORD);



if (!ADMIN_PASSWORD) {
    message = 'Отменено пользователем!';
}else if (ADMIN_PASSWORD === 'm4ng0h4ckz' ) {
    message = 'Добро пожаловать!';
}else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
console.log(message)

//Задача 2
let credits = 23500;
const pricePerDroid = 3000;
let totalPrice;
let message;
const buy = prompt('Введите количество дроидов которое хотите купить');

if (!buy) {
    message = 'Отменено пользователем!';
} else  {
    totalPrice = pricePerDroid * buy;
} if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} if (totalPrice <= credits) {
    totalPrice = credits - totalPrice;
    alert(`Вы купили ${buy} дроидов, на счету осталось ${totalPrice} кредитов.`);
}
console.log(message);
console.log(totalPrice);

//Задача 3
let countryPrice = prompt('Введите имя страни');
countryPrice = countryPrice.toLowerCase();
let priceChina = 100;
let priceSouthAmerica = 250;
let priceAustralia = 170;
let priceIndia = 80;
let priceJamaica =120;


switch (countryPrice) {
    case 'китай':
    console.log(`Доставка в ${countryPrice} будет стоить ${priceChina}`);
    break;

    case 'южная америка':
    console.log(`Доставка в ${countryPrice} будет стоить ${priceChina}`);
    break;

    case 'австралия':
    console.log(`Доставка в ${countryPrice} будет стоить ${priceChina}`);
    break;

    case 'индия':
    console.log(`Доставка в ${countryPrice} будет стоить ${priceChina}`);
    break;

    case 'ямайка':
    console.log(`Доставка в ${countryPrice} будет стоить ${priceChina}`);
    break;

    default:
    console.log('В вашей стране доставка не доступна');
}