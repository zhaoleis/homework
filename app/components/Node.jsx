import React, { Component } from 'react'
import './Node.css'

export default class Node extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  checkNode(currentItem) {
    const { changeCheck } = this.props
    changeCheck(currentItem)
  }

  render() {
    const { content } = this.props
    return (
        <div className={content.child ? 'node-box' : 'child-box'}>
          <input type="checkbox" checked={content.check} onChange={this.checkNode.bind(this, content)} />
          <span className="title">{content.name}</span>
          <span className={content.child && content.child.length > 0 ? 'show' : 'hide'}>
            <img className="node-down" src="/imgs/down.png" alt="" />
          </span>
          <span className={content.child ? 'count border' : 'count'}>{content.count}</span>
        </div>
    )
  }
}