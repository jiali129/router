import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Choose extends Component {
  render() {
    return (
      <div>
        choose号码选择
        <Link to='/fill'>填写信息</Link>
      </div>
    )
  }
}
export default Choose
