import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class RouterView extends Component {
    render() {
        let { routes } = this.props.routes
       console.log(routes)
        return (
            <Switch>
                {
                    routes && routes.map((item,index) => {
                        return <Route exact={item.exact || false} key={index} path={item.path} render={(routeApi) => {
                            return <item.component routes={item.children} {...routeApi}></item.component>
                        }}></Route>
                    })
                  
                }
            </Switch>
        );
    }
}

export default RouterView;