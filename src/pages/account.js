import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
// import Query from './query'
// import Bill from './bill'
import RouterView from '../router/router'
class Account extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        这是Accout页面、我的3G
       <p>
          <NavLink to="/account/query">用量查询</NavLink>
          <NavLink to="/account/query">用量查询</NavLink>
          <NavLink to="/account/bill">话费查询</NavLink>
          <NavLink to="/account/bill">话费查询</NavLink>
        </p>
        <RouterView routes={this.props}></RouterView>
        {/* <Route path='/account/query' render={()=>{
         return <Query />
       }}/>
        <Route  path='/account/bill' render={()=>{
         return <Bill />
       }}/>  */}


      </div>
    )
  }
}
export default Account
