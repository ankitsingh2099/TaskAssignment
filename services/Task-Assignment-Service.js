const _ = require('lodash');

const AgentCurrentTaskRepo = require('../repositories/AgentCurrentTask');
const TaskTypeRepo = require('../repositories/TaskType');
const HistoricalData = require('../repositories/HistoricalData');
const TaskRepo = require('../repositories/Task');

const SelectionService = require('./Selection-Service');

class TaskAssignmentService {
  constructor(taskId) {
    this.taskId = taskId;
  }

  getAgentToAssign () {
    const task = TaskRepo.getTask(this.taskId);
    const freeAgents = AgentCurrentTaskRepo.getFreeAgents(task.type_id);
    const assignmentConfiguration = TaskTypeRepo.getAssignmentConfiguratioForType(task.type_id);

    const freeAgentsIds = _.map(freeAgents, (a) => a.agent_id);
    const freeAgentsHistoricData = HistoricalData.getHistoricalDataByAgentIds(freeAgentsIds);

    const selectionService = new SelectionService(freeAgentsIds, freeAgentsHistoricData);
    selectionService.setStrategy(assignmentConfiguration);
    const agentIdToAssign = selectionService.select();

    return agentIdToAssign;
  }

  assignAgent (agentIdToAssign) {
    AgentCurrentTaskRepo.assignAgentToTask(this.taskId, agentIdToAssign);
    // Add the task data in historical data
  }
}

module.exports = TaskAssignmentService;