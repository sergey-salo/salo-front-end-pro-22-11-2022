/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
document.write(`<p>Дан масив: [${arr.join(', ')}].</p>`);

document.write('<h3>1. Знайти суму та кількість позитивних елементів.</h3>');

let sum = 0;
let quantity = 0;
const positiveElements = [];

for (const item of arr) {
  if (item >= 0) {
    sum += item;
    quantity++;
    positiveElements.push(item);
  }
}

document.write(`<p>Сума: ${sum}, Кількість: ${quantity} </p>`);

document.write('<h3>2. Знайти мінімальний елемент масиву та його порядковий номер.</h3>');
let minValue = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minValue) {
    minValue = arr[i];
    minIndex = i;
  }
}

document.write(`<p>Мінімальний елемент: ${minValue}, порядковий номер: ${minIndex + 1}</p>`);

document.write('<h3>3. Знайти максимальний елемент масиву та його порядковий номер.</h3>');

let maxValue = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
    maxIndex = i;
  }
}

document.write(`<p>Максимальний елемент: ${maxValue}, порядковий номер: ${maxIndex + 1}</p>`);

document.write('<h3>4. Визначити кількість негативних елементів.</h3>');
let negativeQuantity = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < 0) {
    negativeQuantity++;
  }
}

document.write(`<p>Кількість негативних елементів: ${negativeQuantity}</p>`);

document.write('<h3>5. Знайти кількість непарних позитивних елементів.</h3>');
let quantityOfOddPositiveElem = 0;

for (const item of positiveElements) {
  item % 2 !== 0 && quantityOfOddPositiveElem++;
}

document.write(`<p>Кількість непарних позитивних елементів: ${quantityOfOddPositiveElem}</p>`);

document.write('<h3>6. Знайти кількість парних позитивних елементів.</h3>');
let quantityOfEvenPositiveElem = 0;

for (const item of positiveElements) {
  item % 2 === 0 && quantityOfEvenPositiveElem++;
}

document.write(`<p>Кількість парних позитивних елементів: ${quantityOfEvenPositiveElem}</p>`);

document.write('<h3>7. Знайти суму парних позитивних елементів.</h3>');
let sumOfEvenPositiveElem = 0;

for (const item of positiveElements) {
  if (item % 2 === 0) {
    sumOfEvenPositiveElem += item;
  }
}

document.write(`<p>Сума парних позитивних елементів: ${sumOfEvenPositiveElem}</p>`);

document.write('<h3>8. Знайти суму непарних позитивних елементів.</h3>');
let sumOfOddPositiveElem = 0;

for (const item of positiveElements) {
  if (item % 2 !== 0) {
    sumOfOddPositiveElem += item;
  }
}

document.write(`<p>Сума непарних позитивних елементів: ${sumOfOddPositiveElem}</p>`);

document.write('<h3>9. Знайти добуток позитивних елементів.</h3>');
let productOfPositiveElements = 1;

for (const item of positiveElements) {
  productOfPositiveElements *= item;
}

document.write(`<p>Добуток позитивних елементів: ${productOfPositiveElements}</p>`);

document.write('<h3>10. Знайти найбільший серед елементів масиву, остальні обнулити.</h3>');

let maxVl = arr[0];
let maxIndx = 0;

// якщо зважати на те що зараз в массиві тільки одне максимальне число, інакше 3-й варіант
// 1-й варіант
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxVl) {
    maxVl = arr[i];
    maxIndx = i;
  }

  arr[i] = 0;
}

arr[maxIndx] = maxVl;

// 2-й варіант
// for (let i = 1; i < arr.length; i++) {
//  if (arr[i] > maxVl) {
//    maxVl = arr[i];
//    arr[maxIndx] = 0;
//    maxIndx = i;
//  } else {
//    arr[i] = 0;
//  }
// }

// 3-й варіант
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] > maxVl) {
//    maxVl = arr[i];
//  }
// }

// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] !== maxVl) {
//    arr[i] = 0;
//  }
// }

document.write(`<p>Обнулений масив: ${arr.join(', ')}</p>`);
