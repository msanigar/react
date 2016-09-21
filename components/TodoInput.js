import React, { Component } from 'react'

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
				<button>Add</button>
			</div>
		)
	}

}

export default TodoInput