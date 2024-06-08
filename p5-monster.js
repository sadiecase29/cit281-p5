const { getRandomInteger } = require('./p5-monster-game');
const Monster = require('./p5-monster');

class Monster {
  constructor({
    monsterName = "Unknown",
    minimumLife = 0,
    currentLife = 100,
  } = {}) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = this.currentLife >= this.minimumLife;
  }

  getName() {
    return this.monsterName;
  }

  getLife() {
    return this.currentLife;
  }

  setLife(newLife) {
    this.currentLife = newLife;
    this.isAlive = this.currentLife >= this.minimumLife;
  }

  isAlive() {
    return this.isAlive;
  }

  updateLife(lifeChangeAmount) {
    this.currentLife = Math.max(0, this.currentLife + lifeChangeAmount);
    this.isAlive = this.currentLife >= this.minimumLife;
  }

  randomLifeDrain(minimumDrain, maximumDrain) {
    const drainAmount = getRandomInteger(minimumDrain, maximumDrain);
    this.updateLife(-drainAmount);
  }
}

module.exports = Monster;
