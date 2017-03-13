import React, { Component } from 'react';
import {
  List,
  Button,
} from 'semantic-ui-react'

class TodoList extends Component {
  Delete = (event, value) => {
    this.props.delete(value.target);
  }
  render() {
    return (
      <List relaxed>
        {this.props.tasks.map((task) => {
          return(
            <List.Item
              key={task}
            >
              <List.Content>
                <List.Header>
                <Button
                  target={task}
                  animated='vertical'
                  onClick={this.Delete}
                >
                  <Button.Content visible>{task}</Button.Content>
                  <Button.Content hidden>
                    Clear!
                  </Button.Content>
                </Button>
                </List.Header>
              </List.Content>
            </List.Item>
          )
        })}
      </List>
    )
  }
}

TodoList.propTypes = {
  tasks: React.PropTypes.array,
  delete: React.PropTypes.func,
}

export default TodoList;
