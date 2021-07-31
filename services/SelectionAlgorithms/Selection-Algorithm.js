class SelectionAlogorithm {
  constructor(freeAgentIds) {
    this.freeAgentIds = freeAgentIds;
  }

  select(){
    throw new Error('This needs to be implemented by child class');
  }
}

module.exports = SelectionAlogorithm;