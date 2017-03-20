import React, { Component } from 'react';
import {
  Container,
  Button,
  Grid,
  Divider,
  Input,
  Icon,
} from 'semantic-ui-react'

// Components
import TodoList from './TodoList.jsx';
// Functions
import {
  EditApi,
  ReadApi,
} from './../utils/todoApi'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: ''
    }
  }
  // 入力
  handleChange = (event, value) => {
    this.setState({
      text: value.value
    });
  }
  // タスクの追加
  AddTasks = (event) => {
    if(!(this.state.text)){
      return
    }
    event.preventDefault();
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(this.makeTasks(this.state.text)),
      text: ''
    }))
    // EditApi('POST', this.state.tasks);
  }
  // 整形
  makeTasks = (taskName) => {
    const task = {
      value: taskName,
      id: new Date(),
      condition: false,
    }
    return task
  }
  // 削除
  handleDelete = (targetTodo) => {
    let todo = this.state.tasks;
    todo.map((v, i) => {
      if(v.id === targetTodo){ todo.splice(i, 1) }
      return v.id
    })
    this.setState({
      tasks: todo,
    })
    // EditApi('POST', this.state.tasks);
  }
  // 更新
  handleUpdate = (targetTodo, changeTodo) => {
    let todo = this.state.tasks;
    todo.map((v, i) => {
      if(v.id === targetTodo){
        todo[i].value = changeTodo
      }
      return v.id
    })
    this.setState({
      tasks: todo,
    })
    // EditApi('POST', this.state.tasks);
  }
  // 完了 <=> 未完了
  handleCheck = (targetTodo) => {
    let todo = this.state.tasks;
    todo.map((v, i) => {
      if((v.id).toString() === targetTodo){
        todo[i].condition = !(todo[i].condition)
      }
      return v.id
    })
    this.setState({
      tasks: todo,
    })
    // EditApi('POST', this.state.tasks);
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
              <Container textAlign='center'>
                <Grid columns='equal'>
                  <Grid.Column>
                    {null}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Input
                      fluid
                      placeholder='Input Task'
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
            <Container textAlign='center'>
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
    );
  }
}

App.propTypes = {
  tasks: React.PropTypes.array,
}

export default App;
