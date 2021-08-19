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
    this.handleRemovefromFavorites = this.handleRemovefromFavorites.bind(this);
  }
  componentDidMount() {
    this.setState({
      dogs: dogs.dogs
    })
    console.log('dogs.dogs', dogs.dogs);
  }

  handleAddtoFavorites(dog) {
    // e.preventDefault();
    this.setState({
      favorites: [...this.state.favorites, dog]
    });
  };

  handleRemovefromFavorites(dog) {
    // console.log('this', this);
    this.setState({
      favorites: this.state.favorites.filter(favDog => (
        favDog.id !== dog.id
      ))
    });
  };

  render() {
    return(
      <div>
        <h1 className="title">Dogs of the World</h1>
        <Favorites favs={this.state.favorites} handleRemovefromFavorites={this.handleRemovefromFavorites}/>
        <DogList dogs={this.state.dogs} handleAddtoFavorites={this.handleAddtoFavorites}/>
      </div>
    )
  }
}

export default App;