import React from 'react';

const Favorites = (props) => {
  if (props.favs.length === 0) {
    return (<div>Add to your favorites</div>)
  }

  return (
    <div>
      <h3>Favorites List</h3>
      {props.favs.map((dog, i) => (
        <div>
          <h3>{dog.name}</h3>
          <div>
            <img src={dog.image.url} />
          </div>
        </div>
      ))}
    </div>
  )
};

export default Favorites;