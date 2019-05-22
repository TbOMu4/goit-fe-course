'use stpict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt("Введите новый логин");

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов') ;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    alert("Такой логин уже используется!");
    return false;
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (allLogins.includes(login) ? true : false) {
    alert("Логин успешно добавлен!");
    logins.push(login);
  }
  return true;
};

addLogin(login, isLoginValid(login), isLoginUnique(login, logins));

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
