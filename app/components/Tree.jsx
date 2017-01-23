import React, { Component } from 'react'
import { Data } from './Data'

export default class Tree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentWillMount(){
    console.log(Data)
  }
  render() {
    return (
      <h1>Hello, World!</h1>
    )
  }
}