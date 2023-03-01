"use script";

/*Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525*/

function random(min, max) {
  min = +prompt("Введите минимальное значение", "");
  max = +prompt("Введите максимальное значение", "");
  let randomNumber = 0;
  while (min > randomNumber || randomNumber > max) {
    randomNumber = Math.random() * 10;
  }
  alert(randomNumber);
}

random();

/*function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );*/