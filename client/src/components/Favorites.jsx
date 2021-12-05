import React from 'react';
import FavEntry from './FavEntry';

const Favorites = ({favList, removeFavoriate}) => {
  return (
    <div className="fav-cont">
      <h3 className="title">Favorites List</h3>
      <div className="fav-list">
        {favList.map(favDog => (
          <FavEntry
            key={favDog.name}
            favDog={favDog}
            removeFavoriate={removeFavoriate}
          />
        )

        )}
      </div>
    </div>
  )
}

export default Favorites;



