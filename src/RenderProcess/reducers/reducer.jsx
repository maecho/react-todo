const initialState = {
  tasks: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTASK': {
      return {
        tasks: state.tasks.concat(action.value),
      }
    }
    case 'UPDTASK': {
      return Object.assign({}, state, {
        tasks: action.value,
      })
    }
    default: {
      return state
    }
  }
}

export default reducer
