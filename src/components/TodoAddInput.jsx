import React, { Component } from 'react';
import {
  Container,
  Button,
  Checkbox,
  Card,
  List,
  Input,
  Icon,
} from 'semantic-ui-react'

class TodoAddInput extends Component {
  handleChange = (event, value) => {
    this.setState({
      text: value.value
    });
  }
  AddTasks = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(this.state.bufTask),
      bufTask: ''
    }))
    console.log(this.state);
  }
  render(){
    return (
      <div>
        <Input
          placeholder='Input Task'
          onChange={this.handleChange}
          value={this.props.text}
        />
        <Button
          primary
          animated='vertical'
          onClick={this.AddTasks}
        >
          <Button.Content visible>Add</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </div>
    )
  }
}

export default TodoAddInput;
