const RoundRobin = require('./SelectionAlgorithms/Round-Robin');
const Random = require('./SelectionAlgorithms/Random');

class SelectionService {
  constructor(freeAgentIds, freeAgentsHistoricalData) {
    this.freeAgentIds = freeAgentIds
    this.freeAgentsHistoricalData = freeAgentsHistoricalData;
    this.strategy = null;
  }

  setStrategy(configuration) {
    console.log('configuration', configuration);
    this.configuration = configuration;
    switch (configuration) {
      case 'ROUND-ROBIN': {
        const roundRobinSelection = new RoundRobin(this.freeAgentIds, this.freeAgentsHistoricalData);
        this.strategy = roundRobinSelection;
        break;
      }
      case 'RANDOM': {
        const randomSelection = new Random(this.freeAgentIds);
        this.strategy = randomSelection;
        break;
      }
      default: {
        throw new Error(`${this.configuration} is not supported yet`);
      }
    }
  }

  select () {
    return this.strategy.select();
  }
}

module.exports = SelectionService;