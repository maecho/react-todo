import {
  connect,
} from 'react-redux'

import App from './../components/App'
import Actions from './../actions/AppActions'

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleTodoAdd(value) {
      dispatch(Actions.addTodo(value))
    },
    handleUpdAdd(value) {
      dispatch(Actions.updTodo(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
