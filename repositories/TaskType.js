const _ = require('lodash');
class TaskType {
  constructor() {}

  getAssignmentConfiguratioForType (typeId) {
    const type = _.find(TaskTypeList, (l) => (l.id === typeId))
    return type.assignment_configuration;
  }
}

const TaskTypeList = [{
  id: 1,
  name: 'PROMOTIONAL-CALL',
  team: 'CUSTOMER-SUCCESS',
  assignment_configuration: 'RANDOM'
}, {
  id: 2,
  name: 'COMPLAINT-CALL',
  team: 'CUSTOMER-SUCCESS',
  assignment_configuration: 'ROUND-ROBIN'
}, {
  id: 3,
  name: 'WRAP-PRODUCTS',
  team: 'WAREHOUSE',
  assignment_configuration: 'RANDOM'
}, {
  id: 4,
  name: 'SORT-PRODUCTS',
  team: 'WAREHOUSE',
  assignment_configuration: 'ROUND-ROBIN'
}]

module.exports = new TaskType();