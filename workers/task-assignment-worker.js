const _ = require('lodash');
const TaskAssignmentService = require('../services/Task-Assignment-Service');

taskAssignmentWorker = (taskCreationEventInfo) => {
  const taskAssignmentService = new TaskAssignmentService(taskCreationEventInfo.task_id);
  const agentToAssign = taskAssignmentService.getAgentToAssign();
  console.log('agentToAssign', agentToAssign);
  if (_.isNil(agentToAssign)) {
    // Enqueue the message again. Currently we can't assign agent
    console.log('No agents are available Now');
  }
  try {
    taskAssignmentService.assignAgent(agentToAssign)
  } catch (err) {
    // Enqueue the message again. Currently we can't assign agent
    
    console.log(`Error while assigning the agent ${agentToAssign} to task ${taskCreationEventInfo.task_id}`)
    console.log('Reason\n', err);
  }
};

module.exports = taskAssignmentWorker;