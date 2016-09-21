import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			inputText: ""
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
				<p>This is the TextInput component</p>
				<label htmlFor="inputText">TextInput</label>
				<input
				className="inputText"
				type="text"
				palceholder="Some text"
				value={this.state.inputText}
				onChange={this.handleChange.bind(this)}
				/>
				<TextDisplay text={this.state.inputText}/>
			</div>
		)
	}

}

export default TextInput