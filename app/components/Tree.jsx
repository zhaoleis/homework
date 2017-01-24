import React, { Component } from 'react'
import { Data } from './Data'
import Node from './Node'
import './Tree.css'

export default class Tree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Data,
    }
  }

  render() {
    const { data } = this.state

    let tree = []
    tree = data.map(item => <Node key={item.key} id={item.key} check={item.check} title={item.name} count={item.count} child={item.child} />)
    return (
      <div className="box">
        <div className="box-title">
          <span className="title">招聘职位</span>
          <span className="btn-clear">清空</span>
        </div>
        <div>
          {tree}
        </div>
      </div>
    )
  }
}