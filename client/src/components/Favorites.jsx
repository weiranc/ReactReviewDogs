import React from 'react';

const Favorites = (props) => {
  if (props.favs.length === 0) {
    return (<div>Add to your favorites</div>)
  }

  return (
    <div>
      <h3>Favorites List</h3>
      {props.favs.map((dog, i) => (
        <div key={dog.id}>
          <h3>{dog.name}</h3>
          <div>
            <img src={dog.image.url} />
          </div>
          <button onClick={() => props.handleRemovefromFavorites(dog)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  )
};

export default Favorites;