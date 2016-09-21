import React, { Component } from 'react'

class TextDisplay extends Component {

	handleClick() {
		this.props.deleteLetter()
	}

	render() {
		return (
			<div>
				<p>This is the TextDisplay component</p>
				<p>This is the prop text from textInput: {this.props.text}</p>
				<button onClick={this.handleClick.bind(this)}>Undo last</button>
			</div>
		)
	}

}

export default TextDisplay