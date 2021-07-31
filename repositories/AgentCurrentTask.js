const _ = require('lodash');

const AgentCurrentTaskList = [{
  id: 1,
  agent_id: 1,
  task_id: null,
}, {
  id: 2,
  agent_id: 2,
  task_id: null,
}, {
  id: 3,
  agent_id: 3,
  task_id: 3,
}, {
  id: 4,
  agent_id: 4,
  task_id: null,
},
{
  id: 5,
  agent_id: 5,
  task_id: null,
},
{
  id: 6,
  agent_id: 6,
  task_id: null,
}]

class AgentCurrentTask {
  constructor() {
    this.agentCurrentTaskList = AgentCurrentTaskList;
  }

  getFreeAgents(taskTypeId) {
    // This can return agents who are currently free and can do a particular type of task which is passed as parameter
    // For simplicity, just returning all free agents.
    return _.filter(this.agentCurrentTaskList, (a) => (_.isNull(a.task_id)));
  }

  assignAgentToTask(taskId, agentId) {
    const agentFoundAtIndex = _.findIndex(this.agentCurrentTaskList, (a) => (a.agent_id === agentId));
    this.agentCurrentTaskList[agentFoundAtIndex].task_id = taskId
  }
}

module.exports = new AgentCurrentTask();