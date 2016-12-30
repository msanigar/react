import React from 'react'
import { render } from 'react-dom'
import Basket from './components/Basket'
import Contact from './components/Contact'
import Payment from './components/Payment'
import Complete from './components/Complete'
import { Router, Route, Link, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

render((
	<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={1500} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
		<Provider store={store}>
		  <Router history={hashHistory}>
		    <Route path="/" component={Basket} />
		    <Route path="contact" component={Contact} />
				<Route path="payment" component={Payment} />
				<Route path="complete" component={Complete} />
		  </Router>
		 </Provider>
		</ReactCSSTransitionGroup>
), document.getElementById('app'))