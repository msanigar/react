import React from 'react'
import { render } from 'react-dom'
import Test from './components/Test'
import TestTwo from './components/TestTwo'
import { Router, Route, Link, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Test}/>
    <Route path="two" component={TestTwo}/>
  </Router>
), document.getElementById('app'))