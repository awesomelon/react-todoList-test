import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	onChangeEv = e => {
		this.setState({
			text: e.target.value
		});
	};

	resetInputValue = e => {
		this.setState({
			text: ''
		});
	};

	render() {
		const { addTodos } = this.props;
		const { text } = this.state;
		return (
			<header style={style.container}>
				<input
					style={style.input}
					onChange={this.onChangeEv}
					value={text}
					placeholder="할일을 입력해주세요"
					onKeyDown={e => {
						if (e.keyCode === 13) {
							addTodos(text);
							this.resetInputValue();
						}
					}}
				/>
				<button
					onClick={() => {
						addTodos(text);
						this.resetInputValue();
					}}
					style={style.button}
				>
					O
				</button>
			</header>
		);
	}
}

const style = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		height: 50
	},
	input: {
		flexGrow: 2
	},
	button: {
		flexGrow: 1
	}
};

export default Header;
