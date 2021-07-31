const taskAssignmentWorker = require('./workers/task-assignment-worker');
const AgentCurrentTask = require('./repositories/AgentCurrentTask');

main = () => {
  let taskCreationEventInfo = {
    task_id: 7
  };
  taskAssignmentWorker(taskCreationEventInfo);

  taskCreationEventInfo = {
    task_id: 8
  };
  taskAssignmentWorker(taskCreationEventInfo);
}

main();