


function focused() {
    let divs = document.querySelectorAll('div'); // Избираме всички div елементи
    divs = Array.from(divs)

    // Обхождаме всеки div елемент
    divs.forEach((div) => {
        let input = div.querySelector('input'); // Намираме полето за въвеждане в div-а

        // Добавяме слушател за фокус на полето за въвеждане
        input.addEventListener('focus', () => {
            div.classList.add('focused'); // Добавяме клас "focused" към div-а, когато полето получи фокус
        });

        // Добавяме слушател за разфокус на полето за въвеждане
        input.addEventListener('blur', () => {
            div.classList.remove('focused'); // Премахваме клас "focused" от div-а, когато полето се разфокусира
        });
    });
}
