"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt("Введите новый логин");

const isLoginValid = function(login) {
  if (login.length < 4 || login.length > 16) {
    alert("Ошибка! Логин должен быть от 4 до 16 символов");

    return false;
  }
  return true;
};

const isLoginUnique = function(login, allLogins) {
  if (allLogins.includes(login)) {
    alert("Такой логин уже используется!");
    return false;
  }
  return true;
};

const addLogin = function(login, parValid, parUniq) {
  if (parValid && parUniq) {
    alert("Логин успешно добавлен!");
    logins.push(login);
  }
};

addLogin(login, isLoginValid(login), isLoginUnique(login, logins));

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
