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
				<ul style={style.ul}>
					{todos.map(data => {
						return (
							<List
								style={style.li}
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

const style = {
	ul: {
		display: 'flex'
	},
	li: {
		flexGrow: 1,
		height: 50,
		marginBottom: 10,
		borderBottom: '1px solid #ccc'
	}
};

export default App;
