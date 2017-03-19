import React, { Component } from 'react';
import {
  Table,
  Header,
  Checkbox,
} from 'semantic-ui-react'

// Modal
import UpdateDialog from './UpdateDialog'
import DeleteDialog from './DeleteDialog'


class TodoList extends Component {
  Delete = (event, value) => {
    const task = value.target ? value.target : value.id;
    this.props.Delete(task);
  }
  Update = (target, change) => {
    this.props.Update(target, change);
  }
  Check = (event, value) => {
    const taskId = value.value;
    this.props.Check(taskId);
  }
  render() {
    return (
        <Table
          basic='very'
        >
          <Table.Body>
            {this.props.tasks.map((task) => {
              return(
                <Table.Row
                  key={task.id}
                >
                  <Table.Cell
                    collapsing
                  >
                    <Checkbox
                      slider
                      value={(task.id).toString()}
                      onChange={this.Check}
                    />
                  </Table.Cell>
                  <Table.Cell
                    textAlign='right'
                  >
                    <Header as='h2'
                      disabled={task.condition ? true : false}
                    >
                      {task.value}
                    </Header>
                  </Table.Cell>
                  <Table.Cell
                    textAlign='right'
                  >
                    <UpdateDialog
                      task={task}
                      Update={this.Update}
                    />
                    <DeleteDialog
                      task={task}
                      Delete={this.Delete}
                    />
                  </Table.Cell>
                </Table.Row>
              )
            })}
            </Table.Body>
          </Table>
    )
  }
}

TodoList.propTypes = {
  tasks: React.PropTypes.array,
  Delete: React.PropTypes.func,
  Check: React.PropTypes.func,
  Update: React.PropTypes.func,
}

export default TodoList;
