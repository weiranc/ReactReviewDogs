import React, { Component } from 'react';
import DogList from './DogList';
import Favorites from './Favorites';
import dogs from '../../../data/dogs.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      favorites: [],
    }
    this.handleAddtoFavorites = this.handleAddtoFavorites.bind(this);
  }
  componentDidMount() {
    this.setState({
      dogs: dogs.dogs
    })
    console.log('dogs.dogs', dogs.dogs);
  }

  handleAddtoFavorites(e) {
    // e.preventDefault();

  }

  render() {
    return(
      <div>
        <h1>DOG LIST</h1>
        <Favorites favs={this.state.favorites} />
        <DogList dogs={this.state.dogs} />
      </div>
    )
  }
}

export default App;