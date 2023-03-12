//------------------------task-1-----------------------//
/*Создать уведомление
важность: 5
Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

Пример объекта options:

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});
Демо в новом окне

Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.*/
function showNotification(options) {
  const div = document.createElement("div");
  div.classList.add("notification");
  div.classList.add(options.className);
  div.textContent = options.html;

  document.body.append(div);
  div.style.cssText = `position:absolute;
		top: ${options.top}px;
		right:${options.right}px`;

  setTimeout(() => div.remove(), 1500);
}

showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome", // дополнительный класс для div (необязательно)
});
