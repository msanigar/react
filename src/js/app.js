import React from 'react'
import { render } from 'react-dom'
import Basket from './components/Basket'
import Contact from './components/Contact'
import { Router, Route, Link, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Basket} />
    <Route path="contact" component={Contact} />
  </Router>
), document.getElementById('app'))