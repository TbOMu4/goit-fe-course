'use strict';


//1

let input;
const numbers = [];
let total = 0;


while (true) {
  input = prompt('Введите число');
  if (input === null) break;
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
}
if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}


console.log(numbers);




//2

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

do {
  let enterPasswords = prompt('Введите пароль');
  if (enterPasswords === null) break;
  if (passwords.includes(enterPasswords)) {
    alert('Добро пожаловать!');
    break;
  }
  attemptsLeft -= 1;
  if (attemptsLeft); {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
  if (attemptsLeft === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  }
} while (attemptsLeft);