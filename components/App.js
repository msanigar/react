import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {

	render() {
		return (
			<div className="main">
				<h1>Todo List</h1>
				<TodoInput/>
				<TodoList/>
			</div>
		)
	}

}

export default App