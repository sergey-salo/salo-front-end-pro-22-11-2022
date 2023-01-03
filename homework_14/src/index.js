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

const firstValue = +prompt('Завдання 2. Введіть перше значення', 1);
const secondValue = +prompt('Завдання 2. Введіть друге значення', 1);
const operationSign = prompt('Завдання 2. Введіть знак операціЇ (+, -, *, /, %, ^ (ступінь))', '+');

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

const mainArrayLenght = +prompt('Завдання 3. Введіть довжину основного масиву');
const internalArrayLenght = +prompt('Завдання 3. Введіть довжину внутрішніх масивів');

// 1 варіант реалізації функціоналу
function createAndFillArray(mainArrLenght, internalArrLenght) {
  const mainArray = new Array(mainArrLenght);

  for (let i = 0; i < mainArray.length; i++) {
    const innerArray = new Array(internalArrLenght);

    for (let j = 0; j < innerArray.length; j++) {
      innerArray[j] = prompt(`Завдання 3. Введіть значення елементу масиву №[${i + 1}][${j + 1}]`);
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

/*
// 2 варіант реалізації функціоналу
function createAndFillArray(mainArrLenght, internalArrLenght) {
  const mainArray = [];

  for (let i = 0; i < mainArrLenght; i++) {
    const innerArray = [];

    for (let j = 0; j < internalArrLenght; j++) {
      innerArray.push(prompt(`Завдання 3. Введіть значення елементу масиву №[${i + 1}][${j + 1}]`));
    }

    mainArray.push(innerArray);
  }

  return mainArray;
}

const outputArr = createAndFillArray(mainArrayLenght, internalArrayLenght);
const resultStr = outputArr.map((innerArray) => `[${innerArray.join(', ')}]`).join(',<br>');

document.write(`<p> Результат: [</br>${resultStr}</br>]</p>`);
*/

// 4.
document.write(`<h3> 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
Вихідний рядок та символи для видалення задає користувач.</h3>`);

const typedStr = prompt('Завдання 4. Введіть рядок');
const charStr = prompt('Завдання 4. Введіть символи одним словом');

// 1 варіант
// const charArray = [];
// for (const char of charStr) {
//   charArray.push(char);
// }

// 2 варіант
const charArray = charStr.split('');

function deleteCharacters(str, charArr) {
  let newStr = '';

  for (const char of str) {
    if (!charArr.includes(char)) {
      newStr += char;
    }
  }

  return newStr;
}

const result = deleteCharacters(typedStr, charArray);

document.write(
  `<p>Рядок: "${typedStr}". Символи для видалення: ["${charArray.join('", "')}"]. Вихідний рядок: "${result}"<p>`,
);
