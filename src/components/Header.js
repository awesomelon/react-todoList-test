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
			<header>
				<input
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
				>
					O
				</button>
			</header>
		);
	}
}

export default Header;
