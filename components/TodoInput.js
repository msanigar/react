import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoInput extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			inputText: ''
		}
	}

	handleChange(e) {
		this.setState({
			inputText: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.dispatch(actions.addTodo(this.state.inputText))
	}

	render() {
		return (
			<div className="input">
				<p>This is the TodoInput component</p>
				<label htmlFor="inputText">TodoInput</label>
				<input
				className="inputText"
				type="text"
				value={this.state.inputText}
				onChange={this.handleChange.bind(this)}
				/>
				<button onClick={this.handleSubmit.bind((this))}>Add</button>
				<p>{this.state.inputText}</p>
			</div>
		)
	}

}

export default TodoInput