import React from 'react';

const Favorites = (props) => {
  if (props.favs.length === 0) {
    return (<div className="title">No dogs added to favorites</div>)
  }

  return (
    <div className="fav-cont">
      <h3 className="title">Favorites List</h3>
      <div className="fav-list">
        {props.favs.map((dog, i) => (
          <div key={dog.id} className="fav-entry">
            <h3>{dog.name}</h3>
            <div className="fav-photo">
              <img src={dog.image.url} />
            </div>
            <button onClick={() => props.handleRemovefromFavorites(dog)}>Remove from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Favorites;