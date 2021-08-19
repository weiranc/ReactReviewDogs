import React from 'react';

// const DogEntry = (props) => {
//   return (
//     <div className="list-entry">
//       <h3>{props.dog.name} </h3>
//       <div>{props.dog.origin}</div>
//       <div className="photo">
//         <img src={props.dog.image.url} />
//       </div>
//       <button onClick={() => props.handleAddtoFavorites(props.dog)}>Add to Favorites</button>
//       <button>More info</button>
//     </div>
//   )
// };

class DogEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
    this.handleMoreInfoClick = this.handleMoreInfoClick.bind(this);
  }

  handleMoreInfoClick() {
    this.setState({
      showMore: !this.state.showMore
    })
  }

  render() {
    if (!this.state.showMore) {
      return (
        <div className="list-entry">
          <div className="info">
            <h3>{this.props.dog.name} </h3>
            <button onClick={() => this.props.handleAddtoFavorites(this.props.dog)}>Add to Favorites</button>
            <button onClick={this.handleMoreInfoClick}>More info</button>
          </div>
          <div className="photo">
            <img src={this.props.dog.image.url} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="list-entry">
          <div className="info">
            <h3>{this.props.dog.name} </h3>
            <div>Origin: {this.props.dog.origin}</div>
            <div>Bred For: {this.props.dog.bred_for}</div>
            <div>Temperament: {this.props.dog.temperament}</div>
            <button onClick={() => this.props.handleAddtoFavorites(this.props.dog)}>Add to Favorites</button>
            <button onClick={this.handleMoreInfoClick}>Less info</button>
          </div>
          <div className="photo">
            <img src={this.props.dog.image.url} />
          </div>
        </div>
      )
    }
  }
}

export default DogEntry;