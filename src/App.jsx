import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Container,
  Button,
  Header,
  Grid,
  Divider,
  Input,
  Icon,
} from 'semantic-ui-react'

// Components
import TodoList from './components/TodoList.jsx';
// import TodoAddInput from './components/TodoAddInput.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['NoTask'],
      text: ''
    }
  }
  handleChange = (event, value) => {
    this.setState({
      text: value.value
    });
  }
  AddTasks = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(this.state.text),
      text: ''
    }))
  }
  render() {
    return (
      <Container>
        <Grid container>
          <Grid.Row>
            <Divider horizontal>TaskList</Divider>
            <Container textAlign='center'>
              <TodoList
                tasks={this.state.tasks}
              />
            </Container>
          </Grid.Row>

          <Grid.Row>
              <Divider horizontal>Add</Divider>
              <Container textAlign='center'>
                <Input
                  placeholder='Input Task'
                  onChange={this.handleChange}
                  value={this.state.text}
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
