// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
document.write('<h3>1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).</h3>');

// 1-й варіант
// let result = '';
// let index = 20;

// do {
//   if (index < 30) {
//     result += `${index} `;
//   } else {
//     result += index;
//   }
//   index += 0.5;
// } while (index <= 30);

// document.write(result);

// 2-й варіант
const result = [];
let index = 20;

do {
  result.push(index);
  index += 0.5;
} while (index <= 30);

document.write(result.join(' '));

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
document.write('<h3>2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.</h3>');
const oneDollarPrice = 27;
let index2 = 10;

while (index2 <= 100) {
  const conversion = `<p>${index2}$ = ${index2 * oneDollarPrice} грн.<p>`;
  document.write(conversion);
  index2 += 10;
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
document.write('<h3>3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.</h3>');
const intValue = +prompt('Введіть ціле число', 1000);

const numbers = [];

for (let i = 1; i <= 100; i++) {
  const squareТumber = i ** 2;
  // squareТumber <= intValue && numbers.push(i);

  if (squareТumber <= intValue) {
    numbers.push(i);
  } else {
    break;
  }

  console.log(i);
}

document.write(`<p>Ціле число: ${intValue}</p>`);
document.write(`${numbers.join(', ')}`);

// eslint-disable-next-line max-len
// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
document.write('<h3>4. Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).</h3 >');
document.write(`<h3>4. Дане ціле число. ${numbers}'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).</h3 >`);

const dividers = [];

for (let i = 1; i <= intValue; i++) {
  intValue % i === 0 && dividers.push(i);
}

const isSimpleNumber = dividers.length === 2;

// document.write(`<p>${dividers.join(', ')}</p>`);
isSimpleNumber
  ? document.write('Число э простим')
  : document.write('Число не э простим');

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
document.write('<h3>5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).</h3>');

let exponent = 1;
let value;
let isEqual = false;

do {
  value = 3 ** exponent;
  exponent++;
  isEqual = value === intValue;
} while (value < intValue);

const message = isEqual ? `Так, можна, ступінь ${exponent - 1}.` : 'Ні, не можна.';
document.write(message);
