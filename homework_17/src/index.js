/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */

// Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
const ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

/*
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.up();
ladder.showStep(); // 2
*/

ladder.up()
  .up()
  .down()
  .showStep()
  .up()
  .up()
  .showStep()
  .up()
  .up()
  .showStep()
  .down()
  .down()
  .up()
  .down()
  .showStep();
