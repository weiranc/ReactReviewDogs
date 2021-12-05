import React from 'react';

const FavEntry = ({favDog, removeFavoriate}) => {
  return (
    <div className="fav-entry">
      <h3>{favDog.name}</h3>
      <div className="fav-photo">
        <img src={favDog.image.url}/>
      </div>
      <button onClick={() => removeFavoriate(favDog)}>Remove from Favorites</button>
    </div>
  );
};

export default FavEntry;