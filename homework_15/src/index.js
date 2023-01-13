/* eslint-disable no-restricted-syntax */
document.write(`<p><b>Реалізувати рекурсивну функцію, яка зводить число в ступінь.</b><br>
<ul>
  <li><b>Число, яке треба піднести до ступеню, передається як перший аргумент у функції;</b></li>
  <li><b>Ступінь передається як другий аргумент у функцію pow(num, degree).</b></li>
  </ul>
</p>`);

const num = +prompt('Введіть число, яке треба піднести до ступеню', 1);
const degree = +prompt('Число ступень', 1);

// eslint-disable-next-line no-shadow
function pow(num, degree) {
  return (degree === 1) ? num : (num * pow(num, degree - 1));
}

const result = pow(num, degree);

document.write(`<p>${num} в степені ${degree} = ${result}</p>`);
