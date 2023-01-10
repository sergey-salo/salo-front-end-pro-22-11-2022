const arrayLength = +prompt('Введіть довжину массива', 4);
const arr = new Array(arrayLength);

document.write(`<p>Створений масив довженою: ${arr.length}</p>`);

for (let i = 0; i < arrayLength; i++) {
  const intValue = +prompt(`Введіть ${i + 1} значення массива`);
  arr[i] = intValue;
}

document.write(`<p>Заповнений масив: ${arr}</p>`);

// 1) варіант
// eslint-disable-next-line  array-callback-return, consistent-return
// arr.sort((a, b) => {
//   if (a > b) return 1;
//   if (a === b) return 0;
//   if (a < b) return -1; // return -1;
// });

// 2) варіант
// arr.sort((a, b) => (a > b ? 1 : -1));

// 3) варіант
arr.sort((a, b) => a - b);

document.write(`<p>Масив після сортування елементів: ${arr}</p>`);

arr.splice(1, 3);

document.write(`<p>Масив після видалення елементів: ${arr}</p>`);
