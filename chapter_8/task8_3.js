//---------------------------task-1-----------------------------//

/*Добавить функциям метод "f.defer(ms)"
важность: 5
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:*/

function f() {
  alert("Hello!");
}

Function.prototype.defer = function (time) {
  setTimeout(this, time);
};

f.defer(1000); // выведет "Hello!" через 1 секунду

//---------------------------task-2-----------------------------//

/*Добавьте функциям декорирующий метод "defer()"

Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.*/

function sum(a, b) {
  alert(a + b);
}

Function.prototype.defers = function (time) {
  let sum = this;
  return function (...args) {
    setTimeout(() => sum.apply(this, args), time);
  };
};

sum.defers(1000)(1, 2);