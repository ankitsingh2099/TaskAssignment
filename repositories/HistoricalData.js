const _ = require('lodash');

const HistoricalDataList = [{
  id: 1,
  task_id: 1,
  type_id: 1,
  agent_id: 1,
  start_time: 1627698600,
  end_time: 1627698900
}, {
  id: 2,
  task_id: 2,
  type_id: 2,
  agent_id: 2,
  start_time: 1627698900,
  end_time: 1627700400
}, {
  id: 3,
  task_id: 3,
  type_id: 1,
  agent_id: 3,
  start_time: 1627699200,
  end_time: 1627699800
},
{
  id: 4,
  task_id: 4,
  type_id: 2,
  agent_id: 1,
  start_time: 1627699800,
  end_time: 1627701000
},
{
  id: 5,
  task_id: 5,
  type_id: 2,
  agent_id: 2,
  start_time: 1627701600,
  end_time: 1627702200
}]

class HistoricalData {
  constructor() {
    this.hisoricalData = HistoricalDataList;
  }

  getHistoricalDataByAgentIds(agentIds) {
    return _.filter(this.hisoricalData, (d) => (agentIds.includes(d.agent_id)));
  }
}

module.exports = new HistoricalData();
