document.querySelector('.form_body').addEventListener('submit', function(event) {
    const checkbox = document.querySelector('.form_checkbox');
    const checkboxErrorClass = 'checkbox-error';

    // Удаляем класс ошибки, если он уже был добавлен ранее
    checkbox.parentElement.classList.remove(checkboxErrorClass);

    // Проверяем, отмечен ли чекбокс
    if (!checkbox.checked) {
        event.preventDefault(); // Предотвращаем отправку формы
        checkbox.parentElement.classList.add(checkboxErrorClass); // Добавляем класс ошибки к контейнеру чекбокса
    }
});