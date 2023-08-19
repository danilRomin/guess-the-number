// Предупреждение о выборе сложности
if (!sessionStorage.getItem('isFirstLoad')) {
    window.onload = () => {
        setTimeout(() => {
            alert("Вы можете изменить уровень сложности во время игры, нажав на кнопку с вопросительным знаком.");
        }, 1000);
    };
    sessionStorage.setItem('isFirstLoad', true);
}

// Выбор сложности
const easy = document.querySelector(".easy")
const normal = document.querySelector(".normal")
const hard = document.querySelector(".hard")
const difficulty = document.querySelector(".difficulty")
const game = document.querySelector(".game")

// Легкая сложность
easy.addEventListener("click", () => {
    chooseId = 1 // Идентификатор выбора
    difficulty.classList.toggle("hide")
    game.classList.toggle("hide")
    remainedTry = 20;
    document.querySelector(".counter__int__easy").classList.remove("hide")
    document.querySelector(".counter__int__normal").classList.add("hide")
    document.querySelector(".counter__int__hard").classList.add("hide")
    inRowLess = 0;

// Значение "счетчика подряд" меньше
    inRowMore = 0;

// Общее количество кликов
    counterAll = 0;
})

// Норм сложность
normal.addEventListener("click", () => {
    chooseId = 2 // Идентификатор выбора
    difficulty.classList.toggle("hide")
    game.classList.toggle("hide")
    remainedTry = 10;
    document.querySelector(".counter__int__easy").classList.add("hide")
    document.querySelector(".counter__int__normal").classList.remove("hide")
    document.querySelector(".counter__int__hard").classList.add("hide")
    inRowLess = 0;

// Значение "счетчика подряд" меньше
    inRowMore = 0;

// Общее количество кликов
    counterAll = 0;
})

// Тяж сложность
hard.addEventListener("click", () => {
    chooseId = 3 // Идентификатор выбора
    difficulty.classList.toggle("hide")
    game.classList.toggle("hide")
    remainedTry = 5;
    document.querySelector(".counter__int__easy").classList.add("hide")
    document.querySelector(".counter__int__normal").classList.add("hide")
    document.querySelector(".counter__int__hard").classList.remove("hide")
    inRowLess = 0;

// Значение "счетчика подряд" меньше
    inRowMore = 0;

// Общее количество кликов
    counterAll = 0;
})

// Нажатие на вопросительный знак
document.querySelector(".mark").addEventListener("click", () => {
    document.querySelector("html").style.cssText = `background-color: #111;`;
    document.querySelector(".int").value = "";
    window.location.reload()
    inRowLess = 0;
    inRowMore = 0;
    counterAll = 0;
    difficulty.classList.toggle("hide")
    game.classList.toggle("hide")
})

// span "Начните угадывать"
let inputSpan = document.querySelector(".input__span")

// Рандомное число
let randomNumber = Math.floor(Math.random() * 30) + 1;
let score = document.querySelector(".counter__int");
let highScore = 0;

// Логика игры
document.querySelector(".glow__on__hover__int").addEventListener("click", () => {
    let inputNumber = +document.querySelector(".int").value;
    if (inputNumber > 0 && inputNumber < 21) {
        counterAll++;
        remainedTry--;
        score.textContent = remainedTry;
        if (inputNumber < randomNumber && inputNumber > 0) {
            inRowLess++;
            inRowMore = 0; // сбрасываем счетчик
            if (inRowLess === 2) {
                inputSpan.textContent = "Снова слишком мало!";
            } else if (inRowLess !== 2 && inRowLess > 2 && inRowLess <= 5) {
                inputSpan.textContent = "Опять слишком мало!!!";
            } else if (inRowLess > 5) {
                inputSpan.textContent = "Бери больше!!!";
            } else {
                inputSpan.textContent = "Слишком мало!";
            }
            //     Если число больше
        } else if (inputNumber > randomNumber && inputNumber > 0) {
            inRowMore++;
            inRowLess = 0; // сбрасываем счетчик
            if (inRowMore === 2) {
                inputSpan.textContent = "Снова слишком много!";
            } else if (inRowMore !== 2 && inRowMore > 2 && inRowMore <= 5) {
                inputSpan.textContent = "Опять слишком много!";
            } else if (inRowMore > 5) {
                inputSpan.textContent = "Бери меньше!!!";
            } else {
                inputSpan.textContent = "Слишком много!";
            }
            //     Если пользователь угадал
        } else if (inputNumber === randomNumber) {
            win = true;
            inputSpan.textContent = "В точку! 🎉🎊";
            document.querySelector(".mark").textContent = randomNumber;
            // Рекорд
            if (remainedTry > highScore) {
                highScore = remainedTry;
                document.querySelector(".counter__record").textContent = highScore;
            }
            document.querySelector("html").style.cssText = `background-color: #19d31c;`;
            // Изменение кнопки на disabled и сброс счетчиков
            document.querySelector(".glow__on__hover__int").classList.toggle("disabled");
            inRowLess = 0; // сбрасываем счетчик
            inRowMore = 0; // сбрасываем счетчик
        }
        //     Если пользователь не ввел число
    } else if (!inputNumber) {
        inputSpan.textContent = "Введите число от 1 до 20.";
    } else inputSpan.textContent = "Введите число от 1 до 20.";
    // Если попытки кончились
    if (remainedTry < 1 && inputNumber !== randomNumber) {
        inputSpan.textContent = "Вы проиграли! 😭";
        document.querySelector(".mark").textContent = randomNumber;
        document.querySelector("html").style.cssText = `
                background-color: #ff0000ed;
            `;
        document.querySelector(".glow__on__hover__int").classList.toggle("disabled");
    }
});

//При нажатии на кнопку - фокус в инпут; анфокус при проигрыше
document.querySelector(".glow__on__hover__int").addEventListener("click", (event) => {
    document.querySelector(".int").focus();
    if (remainedTry === 0 || win === true) {
        document.querySelector(".int").blur();
        document.querySelector(".int").classList.toggle("disabled__low__opacity")
    }
});

// Кнопка "заново" - сброс всех изменений и счетчиков
document.querySelector(".restart").addEventListener("click", () => {
    win = false
    inputSpan.textContent = "Начните угадывать 👇";
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector("html").style.cssText = `background-color: #111;`;
    document.querySelector(".glow__on__hover__int").classList.remove("disabled");
    document.querySelector(".int").classList.remove("disabled__low__opacity");
    document.querySelector(".mark").textContent = "?";
    document.querySelector(".int").value = "";

    // Сброс счетчиков оставшихся попыток и рекорда, исходя из уровня сложности
    if (chooseId === 1) {
        remainedTry = 20;
        score.textContent = 20;
    } else if (chooseId === 2) {
        remainedTry = 10;
        score.textContent = 10;
    } else if (chooseId === 3) {
        remainedTry = 5;
        score.textContent = 5;
    }
})

// Событие при нажатии на Enter
document.querySelector('.int').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector('.reset').click();
    }
});

// Модальное окно
function modalToggle () {
    document.querySelector(".modal").classList.toggle("hide")
    document.querySelector(".overlay").classList.toggle("hide")
}

document.querySelector(".mark__main").addEventListener("click", modalToggle)
document.querySelector(".overlay").addEventListener("click", modalToggle)
document.querySelector(".close__modal").addEventListener("click", modalToggle)

document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
        document.querySelector(".modal").classList.add("hide")
        document.querySelector(".overlay").classList.add("hide")
    }
})
