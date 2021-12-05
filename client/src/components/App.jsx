import React, { Component } from 'react';
import DogList from './DogList.jsx';
import dogbreeds from '../../../data/dogs.js';
import Favorites from './Favorites.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doggos: [],
      favs: [],
      handleFavorite: this.handleFavorite.bind(this),
      removeFavoriate: this.removeFavoriate.bind(this)
    }
  }

  componentDidMount() {
    this.setState({ doggos: dogbreeds.dogs })
  }

  handleFavorite (favoriteDog) {
    if(!this.state.favs.includes(favoriteDog)) {
      this.setState({favs: [...this.state.favs, favoriteDog]})
    }
  }

  removeFavoriate (favoriteDog) {
    this.setState({favs: this.state.favs.filter(favs => favs !== favoriteDog)})
  }

  render() {
    return (
      <div>
        <h1 className="title">Dogs of the World</h1>
        <Favorites favList={this.state.favs} removeFavoriate={this.state.removeFavoriate} />
        <DogList dogs={this.state.doggos} handleFavorite={this.state.handleFavorite} />
      </div>
    )

  }
}

export default App;