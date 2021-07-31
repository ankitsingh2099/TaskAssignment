const _ = require('lodash');
const SelectionAlogorithm = require("./Selection-Algorithm")

class RoundRobin extends SelectionAlogorithm{
  constructor(freeAgentIds, freeAgentsHistoricalData) {
    super(freeAgentIds);
    this.freeAgentsHistoricalData = freeAgentsHistoricalData;
  }

  static getAlgorithmName() {
    return 'ROUND-ROBIN';
  }

  select() {
    const nonTaskAssignedAgentIds = this.getAgentIdsToWhomTaskWasNotAssignedInPast();
    if (nonTaskAssignedAgentIds.length > 0) {
      return nonTaskAssignedAgentIds[0];
    }
    return this.getElementWithEarlierStartTime().agent_id;
  }

  getElementWithEarlierStartTime() {  
    return _.minBy(this.freeAgentsHistoricalData, (element) => (element.start_time));
  }

  getAgentIdsToWhomTaskWasNotAssignedInPast() {
    const agentIdsWithHistoricalData = _.map(this.freeAgentsHistoricalData, (hd) => (hd.agent_id));
    return _.differenceWith(this.freeAgentIds, agentIdsWithHistoricalData, _.isEqual);
  }
};

module.exports = RoundRobin;