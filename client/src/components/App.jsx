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
      // favorites: {},
      favIds: [],
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
  // array
  // handleAddtoFavorites(dog) {
  //   this.setState({
  //     favorites: [...this.state.favorites, dog]
  //   });
  // };

  // array check for dups
  handleAddtoFavorites(dog) {
    if (!this.state.favIds.includes(dog.id)) {
      this.setState({
        favorites: [...this.state.favorites, dog],
        favIds: [...this.state.favIds, dog.id]
      });
    } else {
      console.error('Dog already added!')
    }
  };

  // object
  // handleAddtoFavorites(dog) {
  //   this.setState((prevState) => {
  //     console.log('prevState', prevState);
  //     let favs = Object.assign({}, prevState.favorites);
  //     if (favs[dog.id] === undefined) {
  //       favs[dog.id] = dog;
  //     }
  //     return {
  //       favorites: favs
  //     }
  //   });
  // }

  // array
  handleRemovefromFavorites(dog) {
    this.setState({
      favorites: this.state.favorites.filter(favDog => (
        favDog.id !== dog.id
      ))
    });
  };

  // object
  // handleRemovefromFavorites(dog) {
  //   this.setState((prevState) => {
  //     let favs = Object.assign({}, prevState.favorites);
  //     delete favs[dog.id];
  //     return {
  //       favorites: favs
  //     }
  //   });
  // }

  render() {
    return(
      <div>
        <h1 className="title">Dogs of the World</h1>
        <Favorites favs={Object.values(this.state.favorites)} handleRemovefromFavorites={this.handleRemovefromFavorites}/>
        <DogList dogs={this.state.dogs} handleAddtoFavorites={this.handleAddtoFavorites}/>
      </div>
    )
  }
}

export default App;