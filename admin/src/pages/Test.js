import React, { Component } from 'react';
import { Button, Modal } from 'antd';

export default class Test extends Component {
  state = {
    baseModal: false
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={ () => this.handleOpen('baseModal')}> 弹窗测试 </Button>
        <Modal
          title='基本弹窗'
          visible={this.state.baseModal}
          onCancel={() => {
            this.setState({
              baseModal: false
            })
          }}
          onOk={() => {
            this.setState({
              baseModal: false
            })
          }}
        >
          这是一条测试信息，用来弹弹看！
        </Modal>
      </div>
    )
  }
}
