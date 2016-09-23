import React, { Component } from 'react'

class TodoList extends Component {

	render() {
		return (
			<div className="TodoList">
				<p>This is the TodoList component</p>
				<ul>

					{
						this.props.todos.map((todo) => {
							return <li key={todo.id}>{todo.text}</li>
						})
					}

				</ul>
			</div>
		)
	}

}

export default TodoList