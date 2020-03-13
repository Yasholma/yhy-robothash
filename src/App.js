import React, { Component } from "react";
import "./App.css";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => {
				return res.json();
			})
			.then(users => {
				this.setState({ monsters: users });
			});
	}

	onSearchChange = e => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		let filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="search months"
					handleChange={this.onSearchChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
