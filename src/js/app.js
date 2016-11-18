import React from 'react'
import { render } from 'react-dom'
import Basket from './components/Basket'
import Contact from './components/Contact'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

render((
	<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={1500} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
		<Provider store={store}>
		  <Router history={browserHistory}>
		    <Route path="/" component={Basket} />
		    <Route path="contact" component={Contact} />
		  </Router>
		 </Provider>
		</ReactCSSTransitionGroup>
), document.getElementById('app'))