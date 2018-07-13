import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Login extends Component {
  render() {
    return (
      <div>
        login
        <Link to='/choose'>填写号码</Link>
        
      </div>
    )
  }
}
export default Login

