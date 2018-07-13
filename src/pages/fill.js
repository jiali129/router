import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Fill extends Component {
  render() {
    return (
      <div>
        Fill
        <Link to='/detail'>订单详情</Link>
      </div>
    )
  }
}
export default Fill
