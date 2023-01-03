document.write(`<p><b>Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.
Все це із замиканнями, наприклад:</b></br>
<b>sum(3) = 3</b></br>
<b>sum(5) = 8</b></br>
<b>sum(20) = 28</b></p>`);

const num = +prompt('Введіть любе число', 0);

function createSumFunction(initialValue) {
  let value = initialValue;

  // eslint-disable-next-line func-names
  return function (newValue) {
    value += newValue;
    return value;
  };
}

const sum = createSumFunction(num);

document.write(`<p>sum(3) = ${sum(3)}</p>`);
document.write(`<p>sum(5) = ${sum(5)}</p>`);
document.write(`<p>sum(20) = ${sum(20)}</p>`);
document.write(`<p>sum(45) = ${sum(45)}</p>`);
document.write(`<p>sum(100) = ${sum(100)}</p>`);
