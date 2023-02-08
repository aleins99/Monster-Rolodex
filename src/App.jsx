import "./App.css";
import { Component } from "react";
import Search from "./components/search-box/Search";
import CardList from "./components/card-list/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            console.log(users);
            return { monsters: users };
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField)
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search
          onChangeHandler={(e) => {
            const searchField = e.target.value.toLowerCase();
            this.setState({ searchField });
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
