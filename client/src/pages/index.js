import { BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import React from 'react'
import store from '@/src/store'
import API from '@common/api.js'
import '@scss/base.scss'
import './index.scss'

// 页面
import Login from './login/index.js'
import Detail from './detail/index'
import About from './about/index'
import NotFoundPage from './404/index'
import Accounts from './accounts'


class Intagram extends React.Component {
    constructor(props) {
        super(props);
        let pathname = location.pathname
        let allowPath = ['/accounts','/about', '/']
        
        if (allowPath.indexOf(pathname) !== -1) {
            API.getUserInfo().then(response => {
                store.dispatch({
                    type: 'ADD_USERINFO',
                    info: response.data
                })
            })
        }
    }

    render() {
        return (
          <Router>
            <Switch>
              <Route exact path="/" component={Detail}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/accounts" component={Accounts}/>
              <Route exact path = '*' component={NotFoundPage} />
            </Switch>
          </Router>
        )
    }
}

export default Intagram
