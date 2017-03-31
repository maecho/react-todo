import React, { Component } from 'react'
import {
  Container,
  Button,
  Grid,
  Divider,
  Input,
} from 'semantic-ui-react'

// Components
import TodoList from './TodoList'
// Functions
// import {
//   EditApi,
//   ReadApi,
// } from './../utils/todoApi'
import {
  setLocal,
  getLocal,
} from './../utils/WebStorage'

class App extends Component {
  constructor(props) {
    super(props)
    let task = []
    if (getLocal()) {
      task = getLocal()
    }
    this.state = {
      tasks: task,
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.AddTasks = this.AddTasks.bind(this)
    this.makeTasks = this.makeTasks.bind(this)
    this.addTasksRegist = this.addTasksRegist.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.UpdateState = this.UpdateState.bind(this)
  }
  // 入力
  handleChange(event, value) {
    this.setState({
      text: value.value,
    })
  }
  // タスクの追加
  AddTasks(event) {
    if (!(this.state.text)) {
      return
    }
    event.preventDefault()
    this.setState(prevState => ({
      tasks: this.addTasksRegist(prevState.tasks.concat(this.makeTasks(this.state.text))),
      text: '',
    }))
  }
  // 整形
  makeTasks(taskName) {
    const task = {
      value: taskName,
      id: new Date(),
      condition: false,
    }
    return task
  }
  // 力技
  addTasksRegist(prev) {
    setLocal(prev)
    // EditApi('POST', prev)
    return prev
  }
  // 削除
  handleDelete(targetTodo) {
    const todo = this.state.tasks
    todo.map((v, i) => {
      if (v.id === targetTodo) { todo.splice(i, 1) }
      return v.id
    })
    this.UpdateState(todo)
  }
  // 更新
  handleUpdate(targetTodo, changeTodo) {
    const todo = this.state.tasks
    todo.map((v, i) => {
      if (v.id === targetTodo) {
        todo[i].value = changeTodo
      }
      return v.id
    })
    this.UpdateState(todo)
  }
  // 完了 <=> 未完了
  handleCheck(targetTodo) {
    const todo = this.state.tasks
    todo.map((v, i) => {
      if ((v.id).toString() === targetTodo) {
        todo[i].condition = !(todo[i].condition)
      }
      return v.id
    })
    this.UpdateState(todo)
  }
  // ステート更新
  UpdateState(value) {
    this.setState({
      tasks: value,
    })
    setLocal(value)
    // EditApi('POST', value)
  }
  render() {
    return (
      <Container>
        <Grid container>
          <Grid.Row>
            <Grid.Column>
              {null}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider horizontal>Add</Divider>
            <Container textAlign="center">
              <Grid columns="equal">
                <Grid.Column>
                  {null}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    fluid
                    placeholder="Input Task"
                    onChange={this.handleChange}
                    value={this.state.text}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Button
                    primary
                    onClick={this.AddTasks}
                  >
                    タスク追加
                  </Button>
                </Grid.Column>
              </Grid>
            </Container>
          </Grid.Row>
          <Grid.Row>
            <Divider horizontal>TaskList</Divider>
            <Container textAlign="center">
              <TodoList
                tasks={this.state.tasks}
                Delete={this.handleDelete}
                Check={this.handleCheck}
                Update={this.handleUpdate}
              />
            </Container>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

App.propTypes = {
  tasks: React.PropTypes.array,
}

export default App
