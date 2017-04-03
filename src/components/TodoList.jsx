import React, { Component } from 'react'
import {
  Table,
  Header,
  Checkbox,
} from 'semantic-ui-react'

// Modal
import UpdateDialog from './UpdateDialog'
import DeleteDialog from './DeleteDialog'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.Delete = this.Delete.bind(this)
    this.Update = this.Update.bind(this)
    this.Check = this.Check.bind(this)
  }
  Delete(event, value) {
    const task = value.target ? value.target : value.id
    this.props.Delete(task)
  }
  Update(target, change) {
    this.props.Update(target, change)
  }
  Check(event, value) {
    let taskId = value.value
    if (event.currentTarget.getAttribute('data-number')) {
      taskId = event.currentTarget.getAttribute('data-number')
    }
    this.props.Check(taskId)
  }
  render() {
    return (
      <Table
        basic="very"
      >
        <Table.Body>
          {this.props.tasks.map((task) => {
            return (
              <Table.Row
                key={task.id}
              >
                <Table.Cell
                  width={3}
                  textAlign="right"
                >
                  <Checkbox
                    checked={task.condition}
                    value={(task.id).toString()}
                    onChange={this.Check}
                  />
                </Table.Cell>
                <Table.Cell
                  width={6}
                  textAlign="center"
                >
                  <Header
                    as="h2"
                    data-number={(task.id).toString()}
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={this.Check}
                    disabled={task.condition}
                    className={task.condition ? 'lineThrough' : ''}
                  >
                    {task.value}
                  </Header>
                </Table.Cell>
                <Table.Cell
                  width={3}
                  textAlign="left"
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

export default TodoList
