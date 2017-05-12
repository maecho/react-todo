const Actions = {
  addTodo(value) {
    return {
      type: 'ADDTASK',
      value,
    }
  },
  updTodo(value) {
    return {
      type: 'UPDTASK',
      value,
    }
  },
}

export default Actions
