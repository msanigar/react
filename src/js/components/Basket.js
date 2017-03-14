import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import store from '../store'
import * as actions from '../actions'

class Basket extends Component {

	constructor(props) {
		super(props);

	}

	componentWillMount() {
		let storeState = store.getState();
		let data = storeState.products;
		let title = storeState.title;
		let basket = storeState.basket;
		this.state = {
			products : data,
			basket : basket,
			title : title,
			unsubscribe: store.subscribe(this.onStoreUpdated.bind(this))
		};
	}

	componentWillUnmount() {
		this.state.unsubscribe();
	}

	onStoreUpdated() {
		
		let storeState = store.getState();
		let data = storeState.products;
		let title = storeState.title;
		let basket = storeState.basket;
		
		this.setState({
			products : data,
			basket : basket,
			title : title
		});

	}

	renderItem(item) {
		return <li key={item.sku}>
			<p>{item.name}</p>
			<p>{item.desc}</p>
			<p>£{item.price.toFixed(2)}</p>
			<img src={item.img}  />
			<button onClick={this.addButton.bind(this, item)}>Add</button>
		</li>
	}

	renderItemMb(item) {
		return <div key={item.sku}>
			<p>{item.name}</p>
			<p>£{item.price.toFixed(2)}</p>
			<p>Quantity: {item.qty}</p>
			<button onClick={this.removeButton.bind(this, item)}>Remove</button>
		</div>
	}

	addButton(item) {
		store.dispatch(actions.addToBasket(item));
	}

	removeButton(item) {
		store.dispatch(actions.removeFromBasket(item));
	}

	validateBasket(event) {
		let basketQty = event.target.getAttribute('data-items');
		
		if(basketQty > 0) {
			hashHistory.push('/contact');
		} else {
			alert("Please add a product to your basket before proceeding!")
		}
	}

	render() {
		let basketItems = this.state.basket.items;
		return <div>
			<p className="title">{this.state.title}</p>
			<ul id="breadcrumbs"><li className="active">Basket</li>  >  <li>Contact Details</li>  >  <li>Payment</li></ul>
				<div id="miniBasket">
				{this.state.basket.items.map(items => this.renderItemMb(items))}
				<p id="basketTotal">Basket total: <br /> <span className="total">£{this.state.basket.total.toFixed(2)}</span></p>
				</div>
					<ul id="products">
						{this.state.products.map(item => this.renderItem(item))}
					</ul>
         	<br /> 
			<button className="proceed" data-items={basketItems.length} onClick={this.validateBasket}> Continue </button>
		</div>
	}

}

export default Basket 