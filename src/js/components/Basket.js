import React, { Component } from 'react'
import { Link } from 'react-router'
import store from '../store'
import * as actions from '../actions'

class Basket extends Component {

	constructor(props) {
		super(props);

		let storeState = store.getState();
		let data = storeState.products;
		let title = storeState.title;
		let img = storeState.img;
		let desc = storeState.desc;
		let price = storeState.price;
		this.state = {
			products : data || '',
			title : title || '',
			img : img || '',
			desc : desc || '',
			price : price || ''
		};
	}

	renderItem(item) {
		return <li key={item.sku}>
			<p>{item.name}</p>
			<p>{item.desc}</p>
			<p>{item.price}</p>
			<img src={item.img}/>
		</li>
	}

	render() {
		return <div>
			<p>{this.state.title}</p>
			<ul id="products">
				{this.state.products.map(item => this.renderItem(item))}
			</ul>
         	<br /> 
			<Link to='contact'> Continue </Link>
		</div>
	}

}

export default Basket 