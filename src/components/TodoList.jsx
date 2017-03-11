import React, { Component } from 'react';
import {
  Container,
  Button,
  Checkbox,
  Card,
  List,
} from 'semantic-ui-react'

const TodoList = (props) => {
    return (
      <List relaxed animated>
        {props.tasks.map((task) => {
          return(
            <List.Item
              key={task}
            >
              <List.Content>
                <List.Header>{task}</List.Header>
              </List.Content>
            </List.Item>
          )
        })}
      </List>
    )
  }

TodoList.propTypes = {
  tasks: React.PropTypes.array,
}

export default TodoList;
