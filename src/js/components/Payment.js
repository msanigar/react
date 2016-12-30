import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import store from '../store'
import * as actions from '../actions'

class Payment extends Component {

    constructor(props) {
		super(props);
    }

    componentWillMount() {
        let storeState = store.getState();
        let data = storeState.products;
        let title = storeState.title;
        let contact = storeState.contact;
        let basket = storeState.basket;
        let payment = storeState.payment;
        this.state = {
            products : data,
            title : title,
            contact : contact,
            basket : basket,
            payment : payment,
            unsubscribe: store.subscribe(this.onStoreUpdated.bind(this))
        };
    }

    componentWillUnmount() {
        this.state.unsubscribe();
    }


    onStoreUpdated() {
		
		let storeState = store.getState();
		let payment = storeState.payment;
		
		this.setState({
			payment : payment
		});

	}

    handleChangePay(event) {
        store.dispatch(actions.updatePay(event));
    }

    render() {
        return <div>
            <p className="title">{this.state.title}</p>
            <ul id="breadcrumbs"><li><Link to='/'>Basket</Link></li>  >  <li><Link to='contact'>Contact Details</Link></li>  >  <li className="active">Payment</li></ul>
            <br /> 
                <form id="payment">
                    <div className="form-half left">
                        Card number: <input type="text" data-paymenttype="card" value={this.state.payment.card} onChange={this.handleChangePay} />
                        Name on card: <input type="text" data-paymenttype="name" value={this.state.payment.name} onChange={this.handleChangePay} />
                        Expiration date: <input type="text" data-paymenttype="date" value={this.state.payment.date} onChange={this.handleChangePay} />
                        CCV: <input type="text" data-paymenttype="ccv" value={this.state.payment.ccv} onChange={this.handleChangePay} />
                    </div>
                    <div id="delDetails" className="form-half right">
                        <p>Please, for obvious reasons don't use real card details.  Validation will only accept the following:</p>
                        <br />
                        <p>Card number: 4111111111111</p>
                        <p>Name on card: Magic Bob</p>
                        <p>Expiration data: 01/20</p>
                        <p>CCV: 123</p>
                    </div>
                </form>
            <br />
            <Link className="proceed back" to='contact'> Go back </Link>
            <Link className="proceed pay" to='complete'> Pay Now </Link>
        </div>
    }
}

export default Payment