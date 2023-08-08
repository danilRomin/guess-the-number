// span "Начните угадывать"
let inputSpan = document.querySelector(".input__span")

// Рандомное число
let randomNumber = Math.floor(Math.random() * 20) + 1;
// console.log(`Рандомное число - ${randomNumber}`)

// Отправка рандомного числа из инпута в переменную

// Значение "счетчика подряд" меньше
let inRowLess = 0;
// Значение "счетчика подряд" меньше
let inRowMore = 0;
// Общее количество кликов
let counterAll = 0;
// Количество попыток
let remainedTry = 20;
let trySpan = document.querySelector(".counter__int");


// else ("Введите число.")
document.querySelector(".glow__on__hover__int").addEventListener("click", () => {
    let inputNumber = document.querySelector(".int").value;
    if (inputNumber > 0) {
        counterAll++;
        remainedTry--;
        trySpan.textContent = remainedTry;
        let inputNumber = document.querySelector(".int").value;
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
        } else if (inputNumber == randomNumber) {
            inputSpan.textContent = "В точку! 🎉🎊";
            document.querySelector("html").style.cssText = `
                background-color: #19d31c;
            `;
            document.querySelector(".glow__on__hover__int").classList.toggle("disabled");
            inRowLess = 0; // сбрасываем счетчик
            inRowMore = 0; // сбрасываем счетчик
        }
    } else if (inputNumber < 1) {
        inputSpan.textContent = "Введите число от 1 до 20.";
    }
    // Если попытки кончились
    if (remainedTry < 1) {
        inputSpan.textContent = "Вы проиграли! 😭";
        document.querySelector("html").style.cssText = `
                background-color: #ff0000ed;
            `;
        document.querySelector(".glow__on__hover__int").classList.toggle("disabled");

    }
});

//При нажатии на кнопку - фокус в инпут

document.querySelector(".glow__on__hover__int").addEventListener("click", () => {
    document.querySelector(".int").focus();
});

