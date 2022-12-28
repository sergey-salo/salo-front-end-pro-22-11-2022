/* eslint-disable no-restricted-syntax */
// 1.
document.write(`<h3>1. Дано масив [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78] з елементами різних типів.
   Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.</h3>`);

const arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];

function getAvarageNumber(inputArr) {
  const numericArr = [];

  // 1 варіант перебору масиву
  for (let i = 0; i < inputArr.length; i++) {
    const item = inputArr[i];

    if (typeof item === 'number') {
      numericArr.push(item);
    }
  }

  // 2 варіант перебору масиву
  /* eslint-disable-next-line */
  // for (const item of inputArr) {
  //   if (typeof item === 'number') {
  //     numericArr.push(item);
  //   }
  // }

  // 3 варіант перебору масиву (найкоротчий)
  // inputArr.forEach((item) => (typeof item === 'number') && numericArr.push(item));

  return numericArr.reduce((sum, current) => sum + current) / numericArr.length;
}

const averageNumber = getAvarageNumber(arr);
document.write(`<p>Cереднє арифметичне: ${averageNumber}</p>`);

// 2.
document.write(`<h3>2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
   У змінній znak може бути: +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної в змінній znak.
   Обидва числа і знак виходять від користувача.</h3>`);

const firstValue = +prompt('Введіть перше значення', 1);
const secondValue = +prompt('Введіть друге значення', 1);
const operationSign = prompt('Введіть знак операціЇ (+, -, *, /, %, ^ (ступінь))', '+');

function doMath(x, znak, y) {
  const result = `${x} ${znak} ${y} = `;
  switch (znak) {
    case '+':
      return result + (x + y);
    case '-':
      return result + (x - y);
    case '*':
      return result + (x * y);
    case '/':
      return result + (x / y);
    case '%':
      return result + (x % y);
    case '^':
      return result + (x ** y);
    default:
      return `Error! Invalid operation value "${znak}".`;
  }
}

const mathResult = doMath(firstValue, operationSign, secondValue);
document.write(`<p>Результат математичної дії: ${mathResult}</p>`);

// 3.
document.write(`<h3>3. Написати функцію заповнення даними користувача двомірного масиву.
   Довжину основного масиву і внутрішніх масивів задає користувач.
   Значення всіх елементів всіх масивів задає користувач.</h3>`);

const mainArrayLenght = +prompt('Введіть довжину основного масиву');
const internalArrayLenght = +prompt('Введіть довжину внутрішніх масивів');

function createAndFillArray(mainArrLenght, internalArrLenght) {
  const mainArray = new Array(mainArrLenght);

  for (let i = 0; i < mainArray.length; i++) {
    const innerArray = new Array(internalArrLenght);

    for (let j = 0; j < innerArray.length; j++) {
      innerArray[j] = prompt(`Введіть значення елементу масиву №[${i + 1}][${j + 1}]`);
    }

    mainArray[i] = innerArray;
  }

  return mainArray;
}

const outputArr = createAndFillArray(mainArrayLenght, internalArrayLenght);

let resultStr = '';

for (const item of outputArr) {
  resultStr += `[${item.join(', ')}], </br>`;
}

resultStr = resultStr.slice(0, resultStr.length - 7);
document.write(`<p>Результат: [</br>${resultStr}</br>]</p>`);
