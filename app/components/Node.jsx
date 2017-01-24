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
    let _child = []
    if (content.child && content.child.length > 0) {
      _child = content.child.map(_item => <div key={_item.key} className="child-box">
        <input type="checkbox" checked={_item.check} onChange={this.checkNode.bind(this, _item)} />
        <span className="title">{_item.name}</span>
        <span className="count">{_item.count}</span>
      </div>)
    }
    return (
      <div className="node">
        <div className="node-box">
          <input type="checkbox" checked={content.check} onChange={this.checkNode.bind(this, content)} />
          <span className="title">{content.name}</span>
          <span className={content.child && content.child.length > 0 ? 'show' : 'hide'}>
            <img className="node-down" src="/imgs/down.png" alt="" />
          </span>
          <span className={content.child ? 'count border' : 'count'}>{content.count}</span>
        </div>
        {_child}
      </div>
    )
  }
}