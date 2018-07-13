import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Detail extends Component {
  render() {
    return (
      <div>
        Detail订单详情
        <Link to='/account'>我的3G</Link>
        
      </div>
    )
  }
}
export default Detail
