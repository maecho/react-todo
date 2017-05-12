import React, { Component } from 'react'
import {
  Button,
  Header,
  Modal,
  Icon,
  Input,
} from 'semantic-ui-react'

class UpdateDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      text: this.props.task.value,
    }
    this.ModalOpen = this.ModalOpen.bind(this)
    this.close = this.close.bind(this)
    this.change = this.change.bind(this)
    this.Update = this.Update.bind(this)
  }
  ModalOpen() {
    this.setState({ open: true })
  }
  close() {
    this.setState({ open: false })
  }
  change(event, value) {
    this.setState({
      text: value.value,
    })
  }
  Update() {
    this.props.Update(this.props.task.id, this.state.text)
    this.close()
  }
  render() {
    return (
      <Modal
        trigger={
          <Button
            color="green"
            onClick={this.ModalOpen}
            disabled={this.props.task.condition}
          >
            更新
          </Button>
        }
        size="small"
        open={this.state.open}
      >
        <Header
          icon="tasks"
          content="タスク更新"
        />
        <Modal.Content>
          <Input
            fluid
            value={this.state.text}
            onChange={this.change}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.close}
          >
            <Icon name="remove" /> キャンセル
          </Button>
          <Button
            color="green"
            onClick={this.Update}
          >
            <Icon name="checkmark" /> 更新
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

UpdateDialog.propTypes = {
  task: React.PropTypes.object,
  Update: React.PropTypes.func,
}

export default UpdateDialog
