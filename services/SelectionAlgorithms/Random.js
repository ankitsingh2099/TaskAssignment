const SelectionAlogorithm = require("./Selection-Algorithm")

class Random extends SelectionAlogorithm{
  constructor(freeAgentIds) {
    super(freeAgentIds);
  }

  static getAlgorithmName() {
    return 'RANDOM';
  }

  select() {
    const totalSelectionElements = this.freeAgentIds.length;
    const randomNumber = this.getRandomNumberBetween(0, totalSelectionElements);
    return this.freeAgentIds[randomNumber];
  }

  getRandomNumberBetween(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
};

module.exports = Random;