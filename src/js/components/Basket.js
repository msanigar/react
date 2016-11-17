import React, { Component } from 'react'
import { Link } from 'react-router'
import store from '../store'

class Basket extends Component {

	constructor(props) {
		super(props);

		let storeState = store.getState();
		let data = storeState.products;
		let title = storeState.title;
		this.state = {
			products : data,
			title : title
		};
	}

	renderItem(item) {
		return <li key={item.sku}>
			{item.name}
		</li>
	}

	render() {
		return <div>
			<p>{this.state.title}</p>
			<ul>
				{this.state.products.map(item => this.renderItem(item))}
			</ul>
         	<br /> 
			<Link to='contact'> Continue </Link>
		</div>
	}

}

export default Basket 