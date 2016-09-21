import React, { Component } from 'react'

class TextDisplay extends Component {

	render() {
		return (
			<div>
			<p>This is the TextDisplay component</p>
			<p>This is the prop text from textInput: {this.props.text}</p>
			</div>
		)
	}

}

export default TextDisplay