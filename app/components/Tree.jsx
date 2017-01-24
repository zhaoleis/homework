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

  clearAll() {
    const _data = this.state.data
    const handleData = function (_data) {
      _data.forEach(item => {
        item.check = false
        if (item.child && item.child.length > 0) {
          handleData(item.child)
        }
      })
    }
    handleData(_data)
    this.setState({
      data: _data
    })
  }

  changeCheck(e) {
    const _data = this.state.data
    const handleData = function (_data, value) {
      _data.forEach(item => {
        if (item.key == e.key) {
          item.check = value ? value : !item.check
          if (item.child) {
            handleData(item.child, item.check)
          }
        } else {
          if (item.child) {
            handleData(item.child)
          }
        }
        if (typeof (value) == 'boolean') {
          item.check = value
        }
      })
    }
    handleData(_data)
    this.setState({
      data: _data
    })
  }

  render() {
    const { data } = this.state
    let tree = []
    tree = data.map(item => <Node key={item.key} content={item} changeCheck={this.changeCheck.bind(this)} />)
    return (
      <div className="box">
        <div className="box-title">
          <span className="title">招聘职位</span>
          <span className="btn-clear" onClick={this.clearAll.bind(this)}>清空</span>
        </div>
        <div>
          {tree}
        </div>
      </div>
    )
  }
}