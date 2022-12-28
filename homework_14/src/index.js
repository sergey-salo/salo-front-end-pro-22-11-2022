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
