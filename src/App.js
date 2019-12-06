import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
	}

	addTodos = text => {
		if (!text) return;

		const newTodo = {
			text: text,
			id: Date.now()
		};
		this.setState(prevState => ({
			todos: [newTodo, ...prevState.todos]
		}));
	};

	removeTodos = id => {
		this.setState(prevState => {
			const index = prevState.todos.findIndex(e => e.id === id);
			prevState.todos.splice(index, 1);
			return {
				todos: [...prevState.todos]
			};
		});
	};

	render() {
		const { todos } = this.state;
		return (
			<div className="App">
				<Header addTodos={this.addTodos} />
				<ul>
					{todos.map(data => {
						return (
							<List
								key={data.id}
								text={data.text}
								id={data.id}
								removeTodos={this.removeTodos}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default App;
