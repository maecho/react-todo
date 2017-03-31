import React, { Component } from 'react'
import {
  Button,
  Header,
  Modal,
  Icon,
} from 'semantic-ui-react'

class DeleteDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.ModalOpen = this.ModalOpen.bind(this)
    this.close = this.close.bind(this)
    this.Delete = this.Delete.bind(this)
  }
  ModalOpen() {
    this.setState({ open: true })
  }
  close() {
    this.setState({ open: false })
  }
  Delete() {
    this.props.Delete(null, this.props.task)
  }
  render() {
    return (
      <Modal
        trigger={
          <Button
            color="red"
            onClick={this.ModalOpen}
          >
            削除
          </Button>
        }
        basic
        size="small"
        open={this.state.open}
      >
        <Header
          icon="tasks"
          content="タスク削除"
        />
        <Modal.Content>
          <p>「{this.props.task.value}」タスクを削除してもよろしいですか？</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            inverted
            onClick={this.close}
          >
            <Icon name="remove" /> いいえ
          </Button>
          <Button
            color="red"
            inverted
            onClick={this.Delete}
          >
            <Icon name="checkmark" /> はい
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

DeleteDialog.propTypes = {
  task: React.PropTypes.object,
  Delete: React.PropTypes.func,
}

export default DeleteDialog
