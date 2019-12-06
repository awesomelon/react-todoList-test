import React, { Component } from 'react';

class List extends Component {
	render() {
		const { text, removeTodos, id } = this.props;
		return (
			<li>
				<span>{text}</span>
				<button onClick={_ => removeTodos(id)}></button>
			</li>
		);
	}
}

export default List;
