import React, { Component } from 'react'
import { Link } from 'react-router'
import store from '../store'

class Contact extends Component {

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

    render() {
        return <div>
            <p>{this.state.title}</p>
            <br /> 
            <p>Give me your details!</p>
            <br />
            <Link to='/'> Go back </Link>
        </div>
    }
}

export default Contact