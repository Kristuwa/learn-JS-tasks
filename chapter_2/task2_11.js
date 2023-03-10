//--------------------------task-1--------------------------------------------//

// Что выведет код ниже?

alert(null || 2 || undefined); // 2

//--------------------------task-2------------------------------------------//

// Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); //1, 2

//--------------------------task-3------------------------------------------//

// Что выведет код ниже?

alert(1 && null && 2); // null

//---------------------------task-4-----------------------------------------//

// Что выведет код ниже?

alert(alert(1) && alert(2)); // 1, undefined

//---------------------------task-5----------------------------------------//

// Что выведет код ниже?

alert(null || (2 && 3) || 4); //3

//---------------------------task-6----------------------------------------//

/*Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90.*/

if (age >= 14 && age <= 90) {
  alert("Ваш возраст входит в диапазон от 14 до 90");
}

//----------------------------task-7----------------------------------------//

/*Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.*/

if (age <= 14 || age >= 90) {
  alert("Ваш возраст не входит в диапазон от 14 до 90");
}
if (!(age >= 14 && age <= 90)) {
  alert("Ваш возраст входит в диапазон от 14 до 90");
}

//----------------------------task-8-------------------------------------//

/*Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?*/

if (-1 || 0) alert("first"); // -1 выполнится
if (-1 && 0) alert("second"); // 0 не выполнится
if (null || (-1 && 1)) alert("third"); // 1 выполнится

//-----------------------------task-9---------------------------------------//

/*Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».*/

let login = prompt("Кто там?", "");

let password;

if (login === "Админ") {
  password = prompt("Пароль?", "");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === "" || password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login === "" || login === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
