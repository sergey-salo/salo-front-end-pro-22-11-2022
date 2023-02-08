/* eslint-disable no-restricted-syntax */

document.write(`<h2>Дан масив об'єктів. Вивести масив телефонних номерів користувачів,
 у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів</h2>`);

const users = [
  {
    index: 0,
    isActive: true,
    balance: '$2,226.60',
    name: 'Eugenia Sawyer',
    gender: 'female',
    phone: '+1 (840) 583-3207',
    address: '949 John Street, Rose, Puerto Rico, 1857',
  },
  {
    index: 1,
    isActive: true,
    balance: '$2,613.77',
    name: 'Pauline Gallegos',
    gender: 'female',
    phone: '+1 (985) 593-3328',
    address: '328 Greenpoint Avenue, Torboy, North Dakota, 6857',
  },
  {
    index: 2,
    isActive: false,
    balance: '$3,976.41',
    name: 'Middleton Chaney',
    gender: 'male',
    phone: '+1 (995) 591-2478',
    address: '807 Fleet Walk, Brutus, Arkansas, 9783',
  },
  {
    index: 3,
    isActive: true,
    balance: '$1,934.58',
    name: 'Burns Poole',
    gender: 'male',
    phone: '+1 (885) 559-3422',
    address: '730 Seba Avenue, Osage, Alabama, 6290',
  },
  {
    index: 4,
    isActive: true,
    balance: '$3,261.65',
    name: 'Mcfadden Horne',
    gender: 'male',
    phone: '+1 (942) 565-3988',
    address: '120 Scholes Street, Kirk, Michigan, 1018',
  },
  {
    index: 5,
    isActive: false,
    balance: '$1,790.56',
    name: 'Suzette Lewis',
    gender: 'female',
    phone: '+1 (837) 586-3283',
    address: '314 Dunne Place, Bawcomville, Guam, 9053',
  },
];

// 1) варіант відображення вхідних данних на сторінці
// document.write(`<p>Данні:</p><p>[${users.map((user) => `<p>${JSON.stringify(user)},</p>`).join('')}]</p>`);

// 2) варіант відображення вхідних данних на сторінці
const tableHeader = Object.keys(users[0]).map((key) => `<th>${key}</th>`).join('');
const tableBody = users.map((user) => `<tr>${Object.values(user).map((value) => `<td>${value}</td>`).join('')}</tr>`)
  .join('');

document.write(`<table><tr>${tableHeader}</tr>${tableBody}</table>`);

// - Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів.
document.write('<p><b>Tелефонні номери користувачів, у яких баланс більше 2000 доларів:</b></p>');

function convertBalanceToNumber(userBalance) {
  let balanceStr = '';
  for (const char of userBalance) {
    if (!['$', ','].includes(char)) {
      balanceStr += char;
    }
  }

  return +balanceStr;
}

for (const user of users) {
  const clearBalance = convertBalanceToNumber(user.balance);
  clearBalance > 2000 && document.write(`<p>${user.phone}</p>`);
}

// - Знайти суму всіх балансів користувачів
let sum = 0;
users.forEach(({ balance }) => {
  sum += convertBalanceToNumber(balance);
});

document.write(`<p><b>Сума всіх балансів користувачів:</b> ${sum.toFixed(2)}</p>`);
