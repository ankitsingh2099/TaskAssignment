const _ = require('lodash');

const TaskList = [{
  id: 4,
  type_id: 1,
  status: 'COMPLETED',
  task_info: {}
}, {
  id: 5,
  type_id: 2,
  status: 'COMPLETED',
  task_info: {}
}, {
  id: 6,
  type_id: 1,
  status: 'CREATED',
  task_info: {}
}, {
  id: 7,
  type_id: 2,
  status: 'CREATED',
  task_info: {}
}, {
  id: 8,
  type_id: 3,
  status: 'CREATED',
  task_info: {}
}, {
  id: 9,
  type_id: 4,
  status: 'CREATED',
  task_info: {}
}]

class Task {
  constructor() {}

  getTask(taskId) {
    const task = _.find(TaskList, (t) => (t.id === taskId));
    if (_.isNil(task)) {
      throw new Error(`No task found with id ${taskId}`);
    }
    return task;
  }
}

module.exports = new Task();
