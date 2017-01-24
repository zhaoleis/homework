import React, { Component } from 'react'
import './Node.css'

export default class Node extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentWillMount() {
  }

  checkNode(id) {
    console.log(id)
  }
  render() {
    const { title, count, child, id,check } = this.props
    let _child = []
    if (child && child.length > 0) {
      _child = child.map(item => <div key={item.key} className="child-box">
        <input type="checkbox" checked={item.check} onChange={this.checkNode.bind(this, item.key)}/>
        <span className="title">{item.name}</span>
        <span className="count">{item.count}</span>
      </div>)
    }
    return (
      <div className="node">
        <div className="node-box">
          <input type="checkbox" checked={check} onChange={this.checkNode.bind(this, id)} />
          <span className="title">{title}</span>
          <span className={child && child.length > 0 ? 'show' : 'hide'}>
            <img className="node-down" src="/imgs/down.png" alt="" />
          </span>
          <span className={child ? 'count border' : 'count'}>{count}</span>
        </div>
        {_child}
      </div>
    )
  }
}