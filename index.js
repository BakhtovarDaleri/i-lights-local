// Получаем все кнопки на тсранице
const buttons = document.querySelectorAll("button");

// Добавляем обработчик события для каждой кнопки
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Кнопка нажата!");
  });
});

// Получаем форму по её id
const form = document.getElementById("myForm");

// Добавляем обработчик события "submit" для формы
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  // Переменные должны объявляться после preventDefault()
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Проверяем, введены ли имя и email
  if (fullName === "" || email === "") {
    alert("Пожалуйста, заполните все обязательные поля.");
  } else {
    // Выводим сообщение с данными
    alert(
      "Форма отправлена! Имя: " +
        fullName +
        ", E-mail: " +
        email +
        ", Сообщение: " +
        message
    );
  }
});
